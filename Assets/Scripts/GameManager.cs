using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameObject sourcePot { get; set; } = null;
    public static GameObject targetPot { get; set; } = null;

    public static GameObject ball { get; set; } = null;
    public static bool potClickable { get; set; } = true;

    public float ballMoveSpeed = 1f;

    public static GameManager instance;

    [SerializeField] Pot[] pots;
    [SerializeField] AudioClip sortCorrectSfx;
    [SerializeField] AudioClip levelUpSfx;
    [SerializeField] ParticleSystem winVfx;
    [SerializeField] GameObject completedPanel;
    [SerializeField] GameObject finalPanel;
    AudioSource audioSource;

    private void Awake()
    {
        if (GameManager.instance == null)
        {
            GameManager.instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        audioSource = GetComponent<AudioSource>();
        Debug.Log("Level: " + SceneLoader.instance.level);

        if (PlayerPrefs.HasKey(Settings.COMPLETED_KEY))
        {
            bool isCompleted = PlayerPrefs.GetInt(Settings.COMPLETED_KEY) == 1 ? true : false;
            if(isCompleted && SceneLoader.instance.level == SceneManager.sceneCountInBuildSettings)
            {
                finalPanel.SetActive(true);
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (sourcePot == null)
        {
            Debug.Log("source pot is null ");
        }
        else
        {
            Debug.Log("source pot is not null " + sourcePot.transform.name);
        }

        if (targetPot == null)
        {
            Debug.Log("target pot is null ");
        }
        else
        {
            Debug.Log("target pot is not null " + targetPot.transform.name);
        }

        if(ball == null)
        {
            Debug.Log("ball is null");
        }
        else
        {
            Debug.Log("ball is not null");
        }

        if (sourcePot != null && targetPot != null && ball != null)
        {
            float speed = ballMoveSpeed * Time.deltaTime;

            if (targetPot.GetComponent<Pot>().IsFull())
            {
                targetPot = sourcePot;
            }
            
            ball.transform.position = Vector3.MoveTowards(ball.transform.position, targetPot.transform.GetChild(0).transform.position, speed);
            if(Mathf.Abs(ball.transform.position.x - targetPot.transform.GetChild(0).transform.position.x) < Mathf.Epsilon)
            {
                ball.GetComponent<Rigidbody>().useGravity = true;
                targetPot.GetComponent<Pot>().Push(ball);

                bool isTargetPotSorted = targetPot.GetComponent<Pot>().IsSorted();
                if (isTargetPotSorted)
                {
                    StartCoroutine(WaitToBallFall());
                }
                else
                {
                    NullifyResources();
                }
                
            }
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            OnQuit();
        }
    }

    private void NullifyResources()
    {
        sourcePot = null;
        targetPot = null;
        ball = null;
    }

    bool IsAllPotSorted()
    {
        if(pots.Length == 0)
        {
            return false;
        }

        foreach(Pot pot in pots)
        {
            if (!pot.IsSorted())
            {
                return false;
            }
        }

        return true;
    }

    public void OnQuit()
    {

#if (UNITY_EDITOR || DEVELOPMENT_BUILD)
        Debug.Log(this.name + " : " + this.GetType() + " : " + System.Reflection.MethodBase.GetCurrentMethod().Name);
#endif
#if (UNITY_EDITOR)
        UnityEditor.EditorApplication.isPlaying = false;
#elif (UNITY_WEBGL)
    Application.OpenURL("about:blank");
#else
    Application.Quit();
#endif
    }


    IEnumerator WaitToBallFall()
    {
        // sourcePot is set to null to fix the animation when a pot is sorted, blocking the Update in GameManager
        ball = null;

        yield return new WaitForSeconds(0.25f);
        audioSource.PlayOneShot(sortCorrectSfx);
        targetPot.GetComponent<Pot>().AnimateOnSorted();

        if (IsAllPotSorted())
        {
            potClickable = false;
            StartCoroutine(WaitToPlaySortedSfx());
        }
        Debug.Log(targetPot.gameObject.name + " is sorted: True");
        Debug.Log("Are all pots sorted: " + IsAllPotSorted());
        
        // TODO: show UI panel to continue/exit

        NullifyResources();
    }

    IEnumerator WaitToPlaySortedSfx()
    {
        // sorted sfx plays for 1 second
        yield return new WaitForSeconds(1f);
        StartCoroutine(ShowCompletedPanel());
    }

    IEnumerator ShowCompletedPanel()
    {
        AudioSource musicSource = GameObject.Find("MusicPlayer").GetComponent<AudioSource>();
        musicSource.Stop();
        Instantiate<ParticleSystem>(winVfx).Play();
        audioSource.PlayOneShot(levelUpSfx);

        yield return new WaitForSeconds(3f);

        if(SceneLoader.instance.level == SceneManager.sceneCountInBuildSettings)
        {
            finalPanel.SetActive(true);
        }
        else
        {
            completedPanel.SetActive(true);
        }
    }
}
