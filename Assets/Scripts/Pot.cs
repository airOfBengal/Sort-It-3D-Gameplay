using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Pot : MonoBehaviour
{
    [SerializeField] Ball[] balls = new Ball[4];

    // Start is called before the first frame update
    void Start()
    {
        for(int i = 0; i < balls.Length; i++)
        {
            balls[i].transform.position = new Vector3(transform.position.x, 0.5f + i, transform.position.z);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
