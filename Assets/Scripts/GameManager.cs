using UnityEngine;

public class GameManager : MonoBehaviour
{
    public GameObject sourcePot { get; set; } = null;
    public GameObject targetPot { get; set; } = null;

    public GameObject ball { get; set; } = null;

    public float ballMoveSpeed = 1f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(sourcePot != null && targetPot != null)
        {
            float speed = ballMoveSpeed * Time.deltaTime;
            ball.transform.position = Vector3.MoveTowards(ball.transform.position, targetPot.transform.GetChild(0).transform.position, speed);
            if(Mathf.Abs(ball.transform.position.y - targetPot.transform.GetChild(0).transform.position.y) < Mathf.Epsilon)
            {
                ball.GetComponent<Rigidbody>().useGravity = true;
                targetPot.GetComponent<Pot>().Push(ball);

                sourcePot = null;
                targetPot = null;
                ball = null;
            }
        }
    }

}
