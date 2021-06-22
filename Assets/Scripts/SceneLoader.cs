using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
    public void RestartLevel()
    {
        int currentSceneBuildIndex = SceneManager.GetActiveScene().buildIndex;
        SceneManager.LoadScene(currentSceneBuildIndex);
    }

    public void NextLevel()
    {
        Debug.Log("Pressed Next Level");
        //GameObject.Find("Completed Panel").SetActive(false);
        RestartLevel();
    }
}
