using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Settings : MonoBehaviour
{
    public static string AUDIO_KEY = "audio";
    public static string COMPLETED_KEY = "completed";
    [SerializeField] GameObject settingsPanel;
    [SerializeField] Toggle soundToggle;
    [SerializeField] TextMeshProUGUI completedTextLabel;
    [SerializeField] TextMeshProUGUI levelTextLabel;
    [SerializeField] TextMeshProUGUI finalTextLabel;

    private void Start()
    {
        if (PlayerPrefs.HasKey(AUDIO_KEY))
        {
            bool isSound = PlayerPrefs.GetInt(AUDIO_KEY) == 1 ? true : false;
            soundToggle.isOn = isSound;
        }
        else
        {
            soundToggle.isOn = true;
        }

        string levelTitle = "Level " + SceneLoader.instance.level;
        completedTextLabel.text = levelTitle;
        levelTextLabel.text = levelTitle;
        finalTextLabel.text = levelTitle;
    }

    public void ShowSettingsPanel()
    {
        settingsPanel.SetActive(true);
        Time.timeScale = 0;
        GameManager.instance.potClickable = false;
    }

    public void HideSettingsPanel()
    {
        settingsPanel.SetActive(false);
        Time.timeScale = 1;
        GameManager.instance.potClickable = true;
    }

    public void OnMusicOnOff(bool isMusic)
    {
        AudioManager.instance.OnOffGameSounds(isMusic);
        PlayerPrefs.SetInt(AUDIO_KEY, isMusic ? 1 : 0);
        PlayerPrefs.Save();
    }

    public void LoadNextLevel()
    {
        SceneLoader.instance.NextLevel();
    }

    public void RestartLevel()
    {
        SceneLoader.instance.RestartLevel();
    }

    public void ResetLevel()
    {
        PlayerPrefs.SetInt(COMPLETED_KEY, 0);
        PlayerPrefs.Save();
        SceneLoader.instance.ResetLevel();
    }
}
