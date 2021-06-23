using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public static AudioManager instance;

    [SerializeField] AudioMixer sortItAudioMixer;

    private void Awake()
    {
        if (AudioManager.instance == null)
        {
            AudioManager.instance = this;
        }
        else
        {
            Destroy(gameObject);
        }

        DontDestroyOnLoad(gameObject);
    }

    void Start()
    {
        if (PlayerPrefs.HasKey(Settings.AUDIO_KEY))
        {
            bool isSound = PlayerPrefs.GetInt(Settings.AUDIO_KEY) == 1 ? true : false;
            sortItAudioMixer.SetFloat("volume", isSound ? 0f : -80f);
        }
        else
        {
            sortItAudioMixer.SetFloat("volume", 0f);
        }
    }

    public void OnOffGameSounds(bool isSound)
    {
        if (isSound)
        {
            sortItAudioMixer.SetFloat("volume", 0f);
        }
        else
        {
            sortItAudioMixer.SetFloat("volume", -80f);
        }
    }
}
