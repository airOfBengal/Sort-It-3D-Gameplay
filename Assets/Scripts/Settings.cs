using UnityEngine;
using UnityEngine.UI;

public class Settings : MonoBehaviour
{
    public static string AUDIO_KEY = "audio";
    [SerializeField] GameObject settingsPanel;
    [SerializeField] Toggle soundToggle;

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
    }

    public void ShowSettingsPanel()
    {
        settingsPanel.SetActive(true);
        Time.timeScale = 0;
        GameManager.potClickable = false;
    }

    public void HideSettingsPanel()
    {
        settingsPanel.SetActive(false);
        Time.timeScale = 1;
        GameManager.potClickable = true;
    }

    public void OnMusicOnOff(bool isMusic)
    {
        AudioManager.instance.OnOffGameSounds(isMusic);
        PlayerPrefs.SetInt(AUDIO_KEY, isMusic ? 1 : 0);
        PlayerPrefs.Save();
    }
}
