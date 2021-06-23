using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour
{
    public static SceneLoader instance;
    public int level { get; set; }

    private void Awake()
    {
        if (SceneLoader.instance == null)
        {
            SceneLoader.instance = this;
        }
        else
        {
            Destroy(gameObject);
        }

        DontDestroyOnLoad(gameObject);
    }

    private void Start()
    {
        if (PlayerPrefs.HasKey("level"))
        {
            level = PlayerPrefs.GetInt("level");
        }
        else
        {
            level = 1;
        }

        LoadScene();
        Debug.Log("levels: " + SceneManager.sceneCountInBuildSettings);
    }

    private void LoadScene()
    {
        SceneManager.LoadScene("Level " + level);
    }

    public void RestartLevel()
    {
        int currentSceneBuildIndex = SceneManager.GetActiveScene().buildIndex;
        SceneManager.LoadScene(currentSceneBuildIndex);
    }

    public void NextLevel()
    {
        if(level + 1 <= SceneManager.sceneCountInBuildSettings)
        {
            level++;
            SaveLevel();
            LoadScene();
        }
    }

    private void SaveLevel()
    {
        PlayerPrefs.SetInt("level", level);
        PlayerPrefs.Save();
    }

    public void ResetLevel()
    {
        level = 1;
        SaveLevel();
        LoadScene();
    }
}
