using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pot : MonoBehaviour
{
    [SerializeField] GameObject[] balls = new GameObject[4];
    [SerializeField] GameObject ballStop;
    [SerializeField] int topBallIndex = 0;

    bool shouldPickup = false;

    GameObject ball = null;

    // Start is called before the first frame update
    void Start()
    {
        for (int i = 0; i < balls.Length; i++)
        {
            if(balls[i] != null)
            {
                balls[topBallIndex] = balls[i];
                balls[topBallIndex].transform.position = new Vector3(transform.position.x, 0.5f + topBallIndex, transform.position.z);
                topBallIndex++;
            }
            
        }
    }

    // Update is called once per frame
    void Update()
    {

        if (shouldPickup)
        {
            float speed = GameManager.instance.ballMoveSpeed * Time.deltaTime;
            ball.transform.position = Vector3.MoveTowards(ball.transform.position, ballStop.transform.position, speed);
            if(Mathf.Abs(ball.transform.position.y - ballStop.transform.position.y) < Mathf.Epsilon)
            {
                shouldPickup = false;
            }
        }
    }

    GameObject Pop()
    {
        if(topBallIndex > 0 && GameManager.instance.ball == null)
        {
            GameObject ball = Instantiate(balls[topBallIndex-1]);
            GameManager.instance.ball = ball;
            Destroy(balls[topBallIndex-1]);
            topBallIndex--;
            return ball;
        }

        return null;
    }

    public void Push(GameObject ball)
    {
        if(topBallIndex < balls.Length && GameManager.instance.ball != null)
        {
            topBallIndex++;
            balls[topBallIndex-1] = ball;
        }
    }

    private void OnMouseDown()
    {
        if(GameManager.instance.sourcePot == null)
                    {
            ball = Pop();
           
            if (ball != null)
            {
                ball.GetComponent<Rigidbody>().useGravity = false;
                shouldPickup = true;
            }

            GameManager.instance.sourcePot = this.gameObject;
        }else if (GameManager.instance.targetPot == null)
        {
            GameManager.instance.targetPot = this.gameObject;
        }

    }

    public bool IsSorted()
    {
        if(topBallIndex == 0)
        {
            return true;
        }

        if(topBallIndex != 4)
        {
            return false;
        }

        for(int i=2; i <= topBallIndex; i++)
        {
            if(balls[i-2].GetComponent<Ball>().GetColor() != balls[i - 1].GetComponent<Ball>().GetColor())
            {
                return false;
            }
        }

        return true;
    }

    public bool IsFull()
    {
        if(topBallIndex == balls.Length)
        {
            return true;
        }

        return false;
    }
}
