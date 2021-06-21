using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject sourcePot { get; set; } = null;
    public GameObject targetPot { get; set; } = null;

    public GameObject ball { get; set; } = null;

    public float ballMoveSpeed = 1f;

    public static GameManager instance;

    [SerializeField] Pot[] pots;
    [SerializeField] AudioClip sortCorrectSfx;
    [SerializeField] AudioClip levelUpSfx;
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

        //DontDestroyOnLoad(gameObject);
    }

    // Start is called before the first frame update
    void Start()
    {
        audioSource = GetComponent<AudioSource>();
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
                    audioSource.PlayOneShot(sortCorrectSfx);
                    targetPot.GetComponent<Pot>().AnimateOnSorted();
                }

                if (IsAllPotSorted())
                {
                    audioSource.Stop();
                    AudioSource musicSource = GameObject.Find("MusicPlayer").GetComponent<AudioSource>();
                    musicSource.Stop();
                    audioSource.volume = 0.5f;
                    audioSource.PlayOneShot(levelUpSfx);
                }
                Debug.Log(targetPot.gameObject.name + " is sorted: " + isTargetPotSorted);
                Debug.Log("Are all pots sorted: " + IsAllPotSorted());
                // TODO: check if pot sorted, on success animate the pot
                // TODO: check if all pot sorted, on success animate the final pot and display particle effect, show UI to continue/exit

                sourcePot = null;
                targetPot = null;
                ball = null;
            }
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            OnQuit();
        }
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
}
