using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    private Pot sourcePot;
    private Pot targetPot;
    private Vector3 sourcePosition;
    private Vector3 targetPosition;
    private GameObject ball;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public GameObject GetBall()
    {
        return ball;
    }

    public void SetBall(GameObject ball)
    {
        this.ball = ball;
    }
}
