/**
 * @version 1.0.7856.32064
 * @copyright anton
 * @compiler Bridge.NET 17.9.11-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            sortItAudioMixer: null
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.instance, null)) {
                    AudioManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.Start start.*/
            Start: function () {
                if (UnityEngine.PlayerPrefs.HasKey(Settings.AUDIO_KEY)) {
                    var isSound = UnityEngine.PlayerPrefs.GetInt(Settings.AUDIO_KEY) === 1 ? true : false;
                    this.sortItAudioMixer.SetFloat("volume", isSound ? 0.0 : -80.0);
                } else {
                    this.sortItAudioMixer.SetFloat("volume", 0.0);
                }
            },
            /*AudioManager.Start end.*/

            /*AudioManager.OnOffGameSounds start.*/
            OnOffGameSounds: function (isSound) {
                if (isSound) {
                    this.sortItAudioMixer.SetFloat("volume", 0.0);
                } else {
                    this.sortItAudioMixer.SetFloat("volume", -80.0);
                }
            },
            /*AudioManager.OnOffGameSounds end.*/


        }
    });
    /*AudioManager end.*/

    /*Ball start.*/
    Bridge.define("Ball", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            materialColor: 0,
            renderer: null,
            audioSource: null,
            dropSfx: null
        },
        ctors: {
            init: function () {
                this.materialColor = Ball.BallColor.GREEN;
            }
        },
        methods: {
            /*Ball.Start start.*/
            Start: function () {
                this.audioSource = this.GetComponent(UnityEngine.AudioSource);
                this.renderer = this.GetComponent(UnityEngine.MeshRenderer);
                this.SetColor(this.materialColor);
            },
            /*Ball.Start end.*/

            /*Ball.SetColor start.*/
            SetColor: function (ballColor) {
                switch (ballColor) {
                    case Ball.BallColor.GREEN: 
                        this.renderer.material.color = new pc.Color( 0, 1, 0, 1 );
                        break;
                    case Ball.BallColor.BLUE: 
                        this.renderer.material.color = new pc.Color( 0, 0, 1, 1 );
                        break;
                    case Ball.BallColor.RED: 
                        this.renderer.material.color = new pc.Color( 1, 0, 0, 1 );
                        break;
                    case Ball.BallColor.YELLOW: 
                        this.renderer.material.color = new pc.Color( 1, 1, 0, 1 );
                        break;
                }
            },
            /*Ball.SetColor end.*/

            /*Ball.GetColor start.*/
            GetColor: function () {
                return this.materialColor;
            },
            /*Ball.GetColor end.*/

            /*Ball.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
                this.audioSource.PlayOneShot(this.dropSfx);
            },
            /*Ball.OnCollisionEnter end.*/


        }
    });
    /*Ball end.*/

    /*Ball+BallColor start.*/
    Bridge.define("Ball.BallColor", {
        $kind: "nested enum",
        statics: {
            fields: {
                RED: 0,
                GREEN: 1,
                BLUE: 2,
                YELLOW: 3
            }
        }
    });
    /*Ball+BallColor end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                sourcePot: null,
                targetPot: null,
                ball: null,
                instance: null
            }
        },
        fields: {
            potClickable: false,
            ballMoveSpeed: 0,
            pots: null,
            sortCorrectSfx: null,
            levelUpSfx: null,
            winVfx: null,
            completedPanel: null,
            finalPanel: null,
            nextLevelButton: null,
            audioSource: null
        },
        ctors: {
            init: function () {
                this.potClickable = true;
                this.ballMoveSpeed = 1.0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.instance, null)) {
                    GameManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
                this.audioSource = this.GetComponent(UnityEngine.AudioSource);

                if (UnityEngine.PlayerPrefs.HasKey(Settings.COMPLETED_KEY)) {
                    var isCompleted = UnityEngine.PlayerPrefs.GetInt(Settings.COMPLETED_KEY) === 1 ? true : false;
                    if (isCompleted && SceneLoader.instance.level === UnityEngine.SceneManagement.SceneManager.sceneCountInBuildSettings) {
                        this.finalPanel.SetActive(true);
                    }
                }

                if (UnityEngine.PlayerPrefs.HasKey("level")) {
                    var level = UnityEngine.PlayerPrefs.GetInt("level");
                    if (level === UnityEngine.SceneManagement.SceneManager.sceneCountInBuildSettings) {
                        this.nextLevelButton.SetActive(false);
                    }
                }
            },
            /*GameManager.Start end.*/

            /*GameManager.Update start.*/
            Update: function () {
                if (UnityEngine.GameObject.op_Inequality(GameManager.sourcePot, null) && UnityEngine.GameObject.op_Inequality(GameManager.targetPot, null) && UnityEngine.GameObject.op_Inequality(GameManager.ball, null)) {
                    var speed = this.ballMoveSpeed * UnityEngine.Time.deltaTime;

                    if (GameManager.targetPot.GetComponent(Pot).IsFull()) {
                        GameManager.targetPot = GameManager.sourcePot;
                    }

                    GameManager.ball.transform.position = pc.Vec3.moveTowards( GameManager.ball.transform.position, GameManager.targetPot.transform.GetChild(0).transform.position, speed );
                    if (Math.abs(GameManager.ball.transform.position.x - GameManager.targetPot.transform.GetChild(0).transform.position.x) < Number.EPSILON) {
                        GameManager.ball.GetComponent(UnityEngine.Rigidbody).useGravity = true;
                        GameManager.targetPot.GetComponent(Pot).Push(GameManager.ball);

                        var isTargetPotSorted = GameManager.targetPot.GetComponent(Pot).IsSorted();
                        if (isTargetPotSorted) {
                            this.StartCoroutine$1(this.WaitToBallFall());
                        } else {
                            this.NullifyResources();
                        }

                    }
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Escape)) {
                    this.OnQuit();
                }
            },
            /*GameManager.Update end.*/

            /*GameManager.NullifyResources start.*/
            NullifyResources: function () {
                GameManager.sourcePot = null;
                GameManager.targetPot = null;
                GameManager.ball = null;
            },
            /*GameManager.NullifyResources end.*/

            /*GameManager.IsAllPotSorted start.*/
            IsAllPotSorted: function () {
                var $t;
                if (this.pots.length === 0) {
                    return false;
                }

                $t = Bridge.getEnumerator(this.pots);
                try {
                    while ($t.moveNext()) {
                        var pot = $t.Current;
                        if (!pot.IsSorted()) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return true;
            },
            /*GameManager.IsAllPotSorted end.*/

            /*GameManager.OnQuit start.*/
            OnQuit: function () {

                UnityEngine.Application.Quit();
            },
            /*GameManager.OnQuit end.*/

            /*GameManager.WaitToBallFall start.*/
            WaitToBallFall: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // sourcePot is set to null to fix the animation when a pot is sorted, blocking the Update in GameManager
                                        GameManager.ball = null;

                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.25);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.audioSource.PlayOneShot(this.sortCorrectSfx);
                                        GameManager.targetPot.GetComponent(Pot).AnimateOnSorted();

                                        if (this.IsAllPotSorted()) {
                                            this.potClickable = false;
                                            this.StartCoroutine$1(this.WaitToPlaySortedSfx());
                                        }

                                        this.NullifyResources();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.WaitToBallFall end.*/

            /*GameManager.WaitToPlaySortedSfx start.*/
            WaitToPlaySortedSfx: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // sorted sfx plays for 1 second
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.StartCoroutine$1(this.ShowCompletedPanel());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.WaitToPlaySortedSfx end.*/

            /*GameManager.ShowCompletedPanel start.*/
            ShowCompletedPanel: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    musicSource,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    musicSource = UnityEngine.GameObject.Find("MusicPlayer").GetComponent(UnityEngine.AudioSource);
                                        musicSource.Stop();
                                        UnityEngine.Object.Instantiate(UnityEngine.ParticleSystem, this.winVfx).Play();
                                        this.audioSource.PlayOneShot(this.levelUpSfx);

                                        $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (SceneLoader.instance.level === UnityEngine.SceneManagement.SceneManager.sceneCountInBuildSettings) {
                                            UnityEngine.PlayerPrefs.SetInt(Settings.COMPLETED_KEY, 1);
                                            UnityEngine.PlayerPrefs.Save();
                                            this.finalPanel.SetActive(true);
                                        } else {
                                            this.completedPanel.SetActive(true);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.ShowCompletedPanel end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Pot start.*/
    Bridge.define("Pot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            balls: null,
            ballStop: null,
            topBallIndex: 0,
            ballPickupSfx: null,
            shouldPickup: false,
            ball: null,
            audioSource: null,
            animator: null
        },
        ctors: {
            init: function () {
                this.balls = System.Array.init(4, null, UnityEngine.GameObject);
                this.topBallIndex = 0;
                this.shouldPickup = false;
            }
        },
        methods: {
            /*Pot.Start start.*/
            Start: function () {
                for (var i = 0; i < this.balls.length; i = (i + 1) | 0) {
                    if (UnityEngine.GameObject.op_Inequality(this.balls[i], null)) {
                        this.balls[this.topBallIndex] = this.balls[i];
                        this.balls[this.topBallIndex].transform.position = new pc.Vec3( this.transform.position.x, 0.5 * this.topBallIndex + this.balls[this.topBallIndex].transform.localScale.y, this.transform.position.z );
                        this.topBallIndex = (this.topBallIndex + 1) | 0;
                    }

                }

                this.audioSource = this.GetComponent(UnityEngine.AudioSource);
                this.animator = this.GetComponent(UnityEngine.Animator);
            },
            /*Pot.Start end.*/

            /*Pot.Update start.*/
            Update: function () {

                if (this.shouldPickup) {
                    var speed = GameManager.instance.ballMoveSpeed * UnityEngine.Time.deltaTime;
                    this.ball.transform.position = pc.Vec3.moveTowards( this.ball.transform.position, this.ballStop.transform.position, speed );
                    if (Math.abs(this.ball.transform.position.y - this.ballStop.transform.position.y) < Number.EPSILON) {
                        this.shouldPickup = false;
                    }
                }
            },
            /*Pot.Update end.*/

            /*Pot.Pop start.*/
            Pop: function () {
                if (this.topBallIndex > 0 && UnityEngine.GameObject.op_Equality(GameManager.ball, null)) {
                    this.audioSource.PlayOneShot(this.ballPickupSfx);
                    var ball = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.balls[((this.topBallIndex - 1) | 0)]);
                    GameManager.ball = ball;
                    UnityEngine.MonoBehaviour.Destroy(this.balls[((this.topBallIndex - 1) | 0)]);
                    this.topBallIndex = (this.topBallIndex - 1) | 0;
                    return ball;
                }

                return null;
            },
            /*Pot.Pop end.*/

            /*Pot.Push start.*/
            Push: function (ball) {
                if (this.topBallIndex < this.balls.length && UnityEngine.GameObject.op_Inequality(GameManager.ball, null)) {
                    this.topBallIndex = (this.topBallIndex + 1) | 0;
                    this.balls[((this.topBallIndex - 1) | 0)] = ball;
                }
            },
            /*Pot.Push end.*/

            /*Pot.OnMouseDown start.*/
            OnMouseDown: function () {
                if (GameManager.instance.potClickable) {
                    if (UnityEngine.GameObject.op_Equality(GameManager.sourcePot, null) && !this.IsEmpty()) {
                        this.ball = this.Pop();

                        if (UnityEngine.GameObject.op_Inequality(this.ball, null)) {
                            this.ball.GetComponent(UnityEngine.Rigidbody).useGravity = false;
                            this.shouldPickup = true;
                        }

                        GameManager.sourcePot = this.gameObject;
                    } else if (UnityEngine.GameObject.op_Equality(GameManager.targetPot, null) && UnityEngine.GameObject.op_Inequality(GameManager.sourcePot, null)) {
                        GameManager.targetPot = this.gameObject;
                    }
                }
            },
            /*Pot.OnMouseDown end.*/

            /*Pot.IsSorted start.*/
            IsSorted: function () {
                if (this.topBallIndex === 0) {
                    return true;
                }

                if (this.topBallIndex !== 4) {
                    return false;
                }

                for (var i = 2; i <= this.topBallIndex; i = (i + 1) | 0) {
                    if (this.balls[((i - 2) | 0)].GetComponent(Ball).GetColor() !== this.balls[((i - 1) | 0)].GetComponent(Ball).GetColor()) {
                        return false;
                    }
                }

                return true;
            },
            /*Pot.IsSorted end.*/

            /*Pot.IsFull start.*/
            IsFull: function () {
                if (this.topBallIndex === this.balls.length) {
                    return true;
                }

                return false;
            },
            /*Pot.IsFull end.*/

            /*Pot.IsEmpty start.*/
            IsEmpty: function () {
                if (this.topBallIndex === 0) {
                    return true;
                }

                return false;
            },
            /*Pot.IsEmpty end.*/

            /*Pot.AnimateOnSorted start.*/
            AnimateOnSorted: function () {
                this.StartCoroutine$1(this.WaitToAnimate());
            },
            /*Pot.AnimateOnSorted end.*/

            /*Pot.WaitToAnimate start.*/
            WaitToAnimate: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    ball,
                    $t1,
                    ball1,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $t = Bridge.getEnumerator(this.balls);
                                        try {
                                            while ($t.moveNext()) {
                                                ball = $t.Current;
                                                ball.GetComponent(UnityEngine.Rigidbody).mass = 0;
                                                ball.transform.parent = this.gameObject.transform;
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        this.animator.SetTrigger$1("Sorted");

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    $t1 = Bridge.getEnumerator(this.balls);
                                        try {
                                            while ($t1.moveNext()) {
                                                ball1 = $t1.Current;
                                                ball1.transform.parent = null;
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Pot.WaitToAnimate end.*/


        }
    });
    /*Pot end.*/

    /*SceneLoader start.*/
    Bridge.define("SceneLoader", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            level: 0
        },
        methods: {
            /*SceneLoader.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(SceneLoader.instance, null)) {
                    SceneLoader.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*SceneLoader.Awake end.*/

            /*SceneLoader.Start start.*/
            Start: function () {
                if (UnityEngine.PlayerPrefs.HasKey("level")) {
                    this.level = UnityEngine.PlayerPrefs.GetInt("level");
                } else {
                    this.level = 1;
                }

                this.LoadScene();
                UnityEngine.Debug.Log$1("levels: " + UnityEngine.SceneManagement.SceneManager.sceneCountInBuildSettings);
            },
            /*SceneLoader.Start end.*/

            /*SceneLoader.LoadScene start.*/
            LoadScene: function () {
                UnityEngine.SceneManagement.SceneManager.LoadScene$2("Level " + this.level);
            },
            /*SceneLoader.LoadScene end.*/

            /*SceneLoader.RestartLevel start.*/
            RestartLevel: function () {
                var currentSceneBuildIndex = UnityEngine.SceneManagement.SceneManager.GetActiveScene().index;
                UnityEngine.SceneManagement.SceneManager.LoadScene(currentSceneBuildIndex);
            },
            /*SceneLoader.RestartLevel end.*/

            /*SceneLoader.NextLevel start.*/
            NextLevel: function () {
                if (((this.level + 1) | 0) <= UnityEngine.SceneManagement.SceneManager.sceneCountInBuildSettings) {
                    this.level = (this.level + 1) | 0;
                    this.SaveLevel();
                    this.LoadScene();
                }
            },
            /*SceneLoader.NextLevel end.*/

            /*SceneLoader.SaveLevel start.*/
            SaveLevel: function () {
                UnityEngine.PlayerPrefs.SetInt("level", this.level);
                UnityEngine.PlayerPrefs.Save();
            },
            /*SceneLoader.SaveLevel end.*/

            /*SceneLoader.ResetLevel start.*/
            ResetLevel: function () {
                this.level = 1;
                this.SaveLevel();
                this.LoadScene();
            },
            /*SceneLoader.ResetLevel end.*/


        }
    });
    /*SceneLoader end.*/

    /*Settings start.*/
    Bridge.define("Settings", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                AUDIO_KEY: null,
                COMPLETED_KEY: null
            },
            ctors: {
                init: function () {
                    this.AUDIO_KEY = "audio";
                    this.COMPLETED_KEY = "completed";
                }
            }
        },
        fields: {
            settingsPanel: null,
            soundToggle: null,
            completedTextLabel: null,
            levelTextLabel: null,
            finalTextLabel: null
        },
        methods: {
            /*Settings.Start start.*/
            Start: function () {
                if (UnityEngine.PlayerPrefs.HasKey(Settings.AUDIO_KEY)) {
                    var isSound = UnityEngine.PlayerPrefs.GetInt(Settings.AUDIO_KEY) === 1 ? true : false;
                    this.soundToggle.isOn = isSound;
                } else {
                    this.soundToggle.isOn = true;
                }

                var levelTitle = "Level " + SceneLoader.instance.level;
                this.completedTextLabel.text = levelTitle;
                this.levelTextLabel.text = levelTitle;
                this.finalTextLabel.text = levelTitle;
            },
            /*Settings.Start end.*/

            /*Settings.ShowSettingsPanel start.*/
            ShowSettingsPanel: function () {
                this.settingsPanel.SetActive(true);
                UnityEngine.Time.timeScale = 0;
                GameManager.instance.potClickable = false;
            },
            /*Settings.ShowSettingsPanel end.*/

            /*Settings.HideSettingsPanel start.*/
            HideSettingsPanel: function () {
                this.settingsPanel.SetActive(false);
                UnityEngine.Time.timeScale = 1;
                GameManager.instance.potClickable = true;
            },
            /*Settings.HideSettingsPanel end.*/

            /*Settings.OnMusicOnOff start.*/
            OnMusicOnOff: function (isMusic) {
                AudioManager.instance.OnOffGameSounds(isMusic);
                UnityEngine.PlayerPrefs.SetInt(Settings.AUDIO_KEY, isMusic ? 1 : 0);
                UnityEngine.PlayerPrefs.Save();
            },
            /*Settings.OnMusicOnOff end.*/

            /*Settings.LoadNextLevel start.*/
            LoadNextLevel: function () {
                SceneLoader.instance.NextLevel();
            },
            /*Settings.LoadNextLevel end.*/

            /*Settings.RestartLevel start.*/
            RestartLevel: function () {
                SceneLoader.instance.RestartLevel();
            },
            /*Settings.RestartLevel end.*/

            /*Settings.ResetLevel start.*/
            ResetLevel: function () {
                UnityEngine.PlayerPrefs.SetInt(Settings.COMPLETED_KEY, 0);
                UnityEngine.PlayerPrefs.Save();
                SceneLoader.instance.ResetLevel();
            },
            /*Settings.ResetLevel end.*/


        }
    });
    /*Settings end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.Audio","UnityEngine","System.Collections","TMPro","UnityEngine.UI"];

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"OnOffGameSounds","t":8,"pi":[{"n":"isSound","pt":$n[0].Boolean,"ps":0}],"sn":"OnOffGameSounds","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"instance","is":true,"t":4,"rt":AudioManager,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortItAudioMixer","t":4,"rt":$n[1].AudioMixer,"sn":"sortItAudioMixer"}]}; }, $n);
    /*AudioManager end.*/

    /*Ball start.*/
    $m("Ball", function () { return {"nested":[Ball.BallColor],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetColor","t":8,"sn":"GetColor","rt":Ball.BallColor,"box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[2].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[2].Collision]},{"a":1,"n":"SetColor","t":8,"pi":[{"n":"ballColor","pt":Ball.BallColor,"ps":0}],"sn":"SetColor","rt":$n[0].Void,"p":[Ball.BallColor]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"audioSource","t":4,"rt":$n[2].AudioSource,"sn":"audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropSfx","t":4,"rt":$n[2].AudioClip,"sn":"dropSfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"materialColor","t":4,"rt":Ball.BallColor,"sn":"materialColor","box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}},{"a":1,"n":"renderer","t":4,"rt":$n[2].MeshRenderer,"sn":"renderer"}]}; }, $n);
    /*Ball end.*/

    /*Ball+BallColor start.*/
    $m("Ball.BallColor", function () { return {"td":Ball,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BLUE","is":true,"t":4,"rt":Ball.BallColor,"sn":"BLUE","box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}},{"a":2,"n":"GREEN","is":true,"t":4,"rt":Ball.BallColor,"sn":"GREEN","box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}},{"a":2,"n":"RED","is":true,"t":4,"rt":Ball.BallColor,"sn":"RED","box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}},{"a":2,"n":"YELLOW","is":true,"t":4,"rt":Ball.BallColor,"sn":"YELLOW","box":function ($v) { return Bridge.box($v, Ball.BallColor, System.Enum.toStringFn(Ball.BallColor));}}]}; }, $n);
    /*Ball+BallColor end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"IsAllPotSorted","t":8,"sn":"IsAllPotSorted","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"NullifyResources","t":8,"sn":"NullifyResources","rt":$n[0].Void},{"a":2,"n":"OnQuit","t":8,"sn":"OnQuit","rt":$n[0].Void},{"a":1,"n":"ShowCompletedPanel","t":8,"sn":"ShowCompletedPanel","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitToBallFall","t":8,"sn":"WaitToBallFall","rt":$n[3].IEnumerator},{"a":1,"n":"WaitToPlaySortedSfx","t":8,"sn":"WaitToPlaySortedSfx","rt":$n[3].IEnumerator},{"a":2,"n":"ball","is":true,"t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_ball","t":8,"rt":$n[2].GameObject,"fg":"ball","is":true},"s":{"a":2,"n":"set_ball","t":8,"p":[$n[2].GameObject],"rt":$n[0].Void,"fs":"ball","is":true},"fn":"ball"},{"a":2,"n":"potClickable","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_potClickable","t":8,"rt":$n[0].Boolean,"fg":"potClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_potClickable","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"potClickable"},"fn":"potClickable"},{"a":2,"n":"sourcePot","is":true,"t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_sourcePot","t":8,"rt":$n[2].GameObject,"fg":"sourcePot","is":true},"s":{"a":2,"n":"set_sourcePot","t":8,"p":[$n[2].GameObject],"rt":$n[0].Void,"fs":"sourcePot","is":true},"fn":"sourcePot"},{"a":2,"n":"targetPot","is":true,"t":16,"rt":$n[2].GameObject,"g":{"a":2,"n":"get_targetPot","t":8,"rt":$n[2].GameObject,"fg":"targetPot","is":true},"s":{"a":2,"n":"set_targetPot","t":8,"p":[$n[2].GameObject],"rt":$n[0].Void,"fs":"targetPot","is":true},"fn":"targetPot"},{"a":1,"n":"__Property__Initializer__ball","is":true,"t":4,"rt":$n[2].GameObject,"sn":"__Property__Initializer__ball"},{"a":1,"n":"__Property__Initializer__potClickable","t":4,"rt":$n[0].Boolean,"sn":"__Property__Initializer__potClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"__Property__Initializer__sourcePot","is":true,"t":4,"rt":$n[2].GameObject,"sn":"__Property__Initializer__sourcePot"},{"a":1,"n":"__Property__Initializer__targetPot","is":true,"t":4,"rt":$n[2].GameObject,"sn":"__Property__Initializer__targetPot"},{"a":1,"n":"audioSource","t":4,"rt":$n[2].AudioSource,"sn":"audioSource"},{"a":2,"n":"ballMoveSpeed","t":4,"rt":$n[0].Single,"sn":"ballMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completedPanel","t":4,"rt":$n[2].GameObject,"sn":"completedPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"finalPanel","t":4,"rt":$n[2].GameObject,"sn":"finalPanel"},{"a":2,"n":"instance","is":true,"t":4,"rt":GameManager,"sn":"instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelUpSfx","t":4,"rt":$n[2].AudioClip,"sn":"levelUpSfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nextLevelButton","t":4,"rt":$n[2].GameObject,"sn":"nextLevelButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pots","t":4,"rt":System.Array.type(Pot),"sn":"pots"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sortCorrectSfx","t":4,"rt":$n[2].AudioClip,"sn":"sortCorrectSfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"winVfx","t":4,"rt":$n[2].ParticleSystem,"sn":"winVfx"},{"a":1,"backing":true,"n":"<ball>k__BackingField","is":true,"t":4,"rt":$n[2].GameObject,"sn":"ball"},{"a":1,"backing":true,"n":"<potClickable>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"potClickable","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"backing":true,"n":"<sourcePot>k__BackingField","is":true,"t":4,"rt":$n[2].GameObject,"sn":"sourcePot"},{"a":1,"backing":true,"n":"<targetPot>k__BackingField","is":true,"t":4,"rt":$n[2].GameObject,"sn":"targetPot"}]}; }, $n);
    /*GameManager end.*/

    /*Pot start.*/
    $m("Pot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimateOnSorted","t":8,"sn":"AnimateOnSorted","rt":$n[0].Void},{"a":2,"n":"IsEmpty","t":8,"sn":"IsEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsFull","t":8,"sn":"IsFull","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsSorted","t":8,"sn":"IsSorted","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"Pop","t":8,"sn":"Pop","rt":$n[2].GameObject},{"a":2,"n":"Push","t":8,"pi":[{"n":"ball","pt":$n[2].GameObject,"ps":0}],"sn":"Push","rt":$n[0].Void,"p":[$n[2].GameObject]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitToAnimate","t":8,"sn":"WaitToAnimate","rt":$n[3].IEnumerator},{"a":1,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":1,"n":"audioSource","t":4,"rt":$n[2].AudioSource,"sn":"audioSource"},{"a":1,"n":"ball","t":4,"rt":$n[2].GameObject,"sn":"ball"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballPickupSfx","t":4,"rt":$n[2].AudioClip,"sn":"ballPickupSfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ballStop","t":4,"rt":$n[2].GameObject,"sn":"ballStop"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"balls","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"balls"},{"a":1,"n":"shouldPickup","t":4,"rt":$n[0].Boolean,"sn":"shouldPickup","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"topBallIndex","t":4,"rt":$n[0].Int32,"sn":"topBallIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Pot end.*/

    /*SceneLoader start.*/
    $m("SceneLoader", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"LoadScene","t":8,"sn":"LoadScene","rt":$n[0].Void},{"a":2,"n":"NextLevel","t":8,"sn":"NextLevel","rt":$n[0].Void},{"a":2,"n":"ResetLevel","t":8,"sn":"ResetLevel","rt":$n[0].Void},{"a":2,"n":"RestartLevel","t":8,"sn":"RestartLevel","rt":$n[0].Void},{"a":1,"n":"SaveLevel","t":8,"sn":"SaveLevel","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"level","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_level","t":8,"rt":$n[0].Int32,"fg":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_level","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"level"},"fn":"level"},{"a":2,"n":"instance","is":true,"t":4,"rt":SceneLoader,"sn":"instance"},{"a":1,"backing":true,"n":"<level>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*SceneLoader end.*/

    /*Settings start.*/
    $m("Settings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HideSettingsPanel","t":8,"sn":"HideSettingsPanel","rt":$n[0].Void},{"a":2,"n":"LoadNextLevel","t":8,"sn":"LoadNextLevel","rt":$n[0].Void},{"a":2,"n":"OnMusicOnOff","t":8,"pi":[{"n":"isMusic","pt":$n[0].Boolean,"ps":0}],"sn":"OnMusicOnOff","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ResetLevel","t":8,"sn":"ResetLevel","rt":$n[0].Void},{"a":2,"n":"RestartLevel","t":8,"sn":"RestartLevel","rt":$n[0].Void},{"a":2,"n":"ShowSettingsPanel","t":8,"sn":"ShowSettingsPanel","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AUDIO_KEY","is":true,"t":4,"rt":$n[0].String,"sn":"AUDIO_KEY"},{"a":2,"n":"COMPLETED_KEY","is":true,"t":4,"rt":$n[0].String,"sn":"COMPLETED_KEY"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"completedTextLabel","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"completedTextLabel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"finalTextLabel","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"finalTextLabel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelTextLabel","t":4,"rt":$n[4].TextMeshProUGUI,"sn":"levelTextLabel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"settingsPanel","t":4,"rt":$n[2].GameObject,"sn":"settingsPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"soundToggle","t":4,"rt":$n[5].Toggle,"sn":"soundToggle"}]}; }, $n);
    /*Settings end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

});
