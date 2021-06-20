using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    [SerializeField] BallColor materialColor = BallColor.GREEN;
    MeshRenderer renderer;

    // Start is called before the first frame update
    void Start()
    {
        renderer = GetComponent<MeshRenderer>();
        SetColor(materialColor);
    }

    private void SetColor(BallColor ballColor)
    {
        switch (ballColor)
        {
            case BallColor.GREEN:
                renderer.material.color = Color.green;
                break;
            case BallColor.BLUE:
                renderer.material.color = Color.blue;
                break;
            case BallColor.RED:
                renderer.material.color = Color.red;
                break;
            case BallColor.YELLOW:
                renderer.material.color = Color.yellow;
                break;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    enum BallColor
    {
        RED,
        GREEN,
        BLUE,
        YELLOW
    }
}
