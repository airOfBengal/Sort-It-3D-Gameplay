using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pot : MonoBehaviour
{
    [SerializeField] GameObject[] balls = new GameObject[4];
    [SerializeField] GameObject ballStop;
    [SerializeField] int topBallIndex;

    [SerializeField] GameManager gameManager;

    bool shouldPickup = false;

    // Start is called before the first frame update
    void Start()
    {
        for(int i = 0; i < balls.Length; i++)
        {
            balls[i].transform.position = new Vector3(transform.position.x, 0.5f + i, transform.position.z);
        }
        if(balls.Length > 0)
        {
            topBallIndex = balls.Length - 1;
        }
        else
        {
            topBallIndex = 0;
        }
    }

    // Update is called once per frame
    void Update()
    {
        GameObject ball = null;

        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit))
            {
                if (hit.transform.name == "Pot")
                {
                    Debug.Log("clicked on pot");
                    if(gameManager.sourcePot == null)
                    {
                        ball = Pop();
                        if (ball != null)
                        {
                            ball.GetComponent<Rigidbody>().useGravity = false;
                            shouldPickup = true;
                        }

                        gameManager.sourcePot = this.gameObject;
                    }else if(gameManager.targetPot == null)
                    {
                        gameManager.targetPot = this.gameObject;
                    }
                    

                }
                else
                {
                    Debug.Log("clicked elsewhere");
                }
            }
        }

        if (shouldPickup)
        {
            float speed = gameManager.ballMoveSpeed * Time.deltaTime;
            ball.transform.position = Vector3.MoveTowards(ball.transform.position, ballStop.transform.position, speed);
            if(Mathf.Abs(ball.transform.position.y - ballStop.transform.position.y) < Mathf.Epsilon)
            {
                shouldPickup = false;
            }
        }
    }

    GameObject Pop()
    {
        if(topBallIndex > 0 && gameManager.ball == null)
        {
            GameObject ball = Instantiate(balls[topBallIndex]);
            gameManager.ball = ball;
            Destroy(balls[topBallIndex]);
            topBallIndex--;
            return ball;
        }

        return null;
    }

    public void Push(GameObject ball)
    {
        if(topBallIndex < balls.Length-1 && gameManager.ball != null)
        {
            topBallIndex++;
            balls[topBallIndex] = ball;
        }
    }
   
}
