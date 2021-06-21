using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject sourcePot { get; set; } = null;
    public GameObject targetPot { get; set; } = null;

    public GameObject ball { get; set; } = null;

    public float ballMoveSpeed = 1f;

    public static GameManager instance;

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
            //Vector3 targetPos = new Vector3(targetPot.transform.position.x, targetPot.transform.GetChild(0).transform.position.y, targetPot.transform.position.z);
            ball.transform.position = Vector3.MoveTowards(ball.transform.position, targetPot.transform.GetChild(0).transform.position, speed);
            if(Mathf.Abs(ball.transform.position.x - targetPot.transform.GetChild(0).transform.position.x) < Mathf.Epsilon)
            {
                ball.GetComponent<Rigidbody>().useGravity = true;
                targetPot.GetComponent<Pot>().Push(ball);

                bool isTargetPotSorted = targetPot.GetComponent<Pot>().IsSorted();
                Debug.Log(targetPot.gameObject.name + " is sorted: " + isTargetPotSorted);

                sourcePot = null;
                targetPot = null;
                ball = null;
            }
        }
    }

}
