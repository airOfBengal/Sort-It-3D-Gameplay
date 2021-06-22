using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Settings : MonoBehaviour
{
    [SerializeField] GameObject settingsPanel;

    public void ShowSettingsPanel()
    {
        settingsPanel.SetActive(true);
        Time.timeScale = 0;
    }

    public void HideSettingsPanel()
    {
        settingsPanel.SetActive(false);
        Time.timeScale = 1;
    }
}
