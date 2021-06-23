using System.Collections;
using UnityEngine;

public class Pot : MonoBehaviour
{
    [SerializeField] GameObject[] balls = new GameObject[4];
    [SerializeField] GameObject ballStop;
    [SerializeField] int topBallIndex = 0;
    [SerializeField] AudioClip ballPickupSfx;

    bool shouldPickup = false;

    GameObject ball = null;
    AudioSource audioSource;
    Animator animator;

    void Start()
    {
        for (int i = 0; i < balls.Length; i++)
        {
            if(balls[i] != null)
            {
                balls[topBallIndex] = balls[i];
                balls[topBallIndex].transform.position = new Vector3(transform.position.x, 0.5f * topBallIndex + balls[topBallIndex].transform.localScale.y, transform.position.z);
                topBallIndex++;
            }
            
        }

        audioSource = GetComponent<AudioSource>();
        animator = GetComponent<Animator>();
    }

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
        if(topBallIndex > 0 && GameManager.ball == null)
        {
            audioSource.PlayOneShot(ballPickupSfx);
            GameObject ball = Instantiate(balls[topBallIndex-1]);
            GameManager.ball = ball;
            Destroy(balls[topBallIndex-1]);
            topBallIndex--;
            return ball;
        }

        return null;
    }

    public void Push(GameObject ball)
    {
        if(topBallIndex < balls.Length && GameManager.ball != null)
        {
            topBallIndex++;
            balls[topBallIndex-1] = ball;
        }
    }

    private void OnMouseDown()
    {
        if (GameManager.instance.potClickable)
        {
            if (GameManager.sourcePot == null && !IsEmpty())
            {
                ball = Pop();

                if (ball != null)
                {
                    ball.GetComponent<Rigidbody>().useGravity = false;
                    shouldPickup = true;
                }

                GameManager.sourcePot = this.gameObject;
            }
            else if (GameManager.targetPot == null && GameManager.sourcePot != null)
            {
                GameManager.targetPot = this.gameObject;
            }
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

    public bool IsEmpty()
    {
        if(topBallIndex == 0)
        {
            return true;
        }

        return false;
    }

    public void AnimateOnSorted()
    {
        StartCoroutine(WaitToAnimate());
    }

    IEnumerator WaitToAnimate()
    {
        foreach (GameObject ball in balls)
        {
            ball.GetComponent<Rigidbody>().mass = 0;
            ball.transform.parent = gameObject.transform;
        }

        animator.SetTrigger("Sorted");

        yield return new WaitForSeconds(1f);

        foreach (GameObject ball in balls)
        {
            ball.transform.parent = null;
        }
    }
}
