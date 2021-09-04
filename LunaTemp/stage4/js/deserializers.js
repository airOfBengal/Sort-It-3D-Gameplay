var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4994 = root || request.c( 'UnityEngine.JointSpring' )
  var i4995 = data
  i4994.spring = i4995[0]
  i4994.damper = i4995[1]
  i4994.targetPosition = i4995[2]
  return i4994
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4996 = root || request.c( 'UnityEngine.JointMotor' )
  var i4997 = data
  i4996.m_TargetVelocity = i4997[0]
  i4996.m_Force = i4997[1]
  i4996.m_FreeSpin = i4997[2]
  return i4996
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4998 = root || request.c( 'UnityEngine.JointLimits' )
  var i4999 = data
  i4998.m_Min = i4999[0]
  i4998.m_Max = i4999[1]
  i4998.m_Bounciness = i4999[2]
  i4998.m_BounceMinVelocity = i4999[3]
  i4998.m_ContactDistance = i4999[4]
  i4998.minBounce = i4999[5]
  i4998.maxBounce = i4999[6]
  return i4998
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5000 = root || request.c( 'UnityEngine.JointDrive' )
  var i5001 = data
  i5000.m_PositionSpring = i5001[0]
  i5000.m_PositionDamper = i5001[1]
  i5000.m_MaximumForce = i5001[2]
  return i5000
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5002 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5003 = data
  i5002.m_Spring = i5003[0]
  i5002.m_Damper = i5003[1]
  return i5002
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5004 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5005 = data
  i5004.m_Limit = i5005[0]
  i5004.m_Bounciness = i5005[1]
  i5004.m_ContactDistance = i5005[2]
  return i5004
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5006 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5007 = data
  i5006.m_ExtremumSlip = i5007[0]
  i5006.m_ExtremumValue = i5007[1]
  i5006.m_AsymptoteSlip = i5007[2]
  i5006.m_AsymptoteValue = i5007[3]
  i5006.m_Stiffness = i5007[4]
  return i5006
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5008 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5009 = data
  i5008.m_LowerAngle = i5009[0]
  i5008.m_UpperAngle = i5009[1]
  return i5008
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5010 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5011 = data
  i5010.m_MotorSpeed = i5011[0]
  i5010.m_MaximumMotorTorque = i5011[1]
  return i5010
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5012 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5013 = data
  i5012.m_DampingRatio = i5013[0]
  i5012.m_Frequency = i5013[1]
  i5012.m_Angle = i5013[2]
  return i5012
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5014 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5015 = data
  i5014.m_LowerTranslation = i5015[0]
  i5014.m_UpperTranslation = i5015[1]
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5016 = root || new pc.UnityMaterial()
  var i5017 = data
  i5016.name = i5017[0]
  request.r(i5017[1], i5017[2], 0, i5016, 'shader')
  i5016.renderQueue = i5017[3]
  i5016.enableInstancing = !!i5017[4]
  var i5019 = i5017[5]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 1) {
    i5018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5019[i + 0]) );
  }
  i5016.floatParameters = i5018
  var i5021 = i5017[6]
  var i5020 = []
  for(var i = 0; i < i5021.length; i += 1) {
    i5020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5021[i + 0]) );
  }
  i5016.colorParameters = i5020
  var i5023 = i5017[7]
  var i5022 = []
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5023[i + 0]) );
  }
  i5016.vectorParameters = i5022
  var i5025 = i5017[8]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5025[i + 0]) );
  }
  i5016.textureParameters = i5024
  var i5027 = i5017[9]
  var i5026 = []
  for(var i = 0; i < i5027.length; i += 1) {
    i5026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5027[i + 0]) );
  }
  i5016.materialFlags = i5026
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5031 = data
  i5030.name = i5031[0]
  i5030.value = i5031[1]
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5035 = data
  i5034.name = i5035[0]
  i5034.value = new pc.Color(i5035[1], i5035[2], i5035[3], i5035[4])
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5039 = data
  i5038.name = i5039[0]
  i5038.value = new pc.Vec4( i5039[1], i5039[2], i5039[3], i5039[4] )
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5043 = data
  i5042.name = i5043[0]
  request.r(i5043[1], i5043[2], 0, i5042, 'value')
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5047 = data
  i5046.name = i5047[0]
  i5046.enabled = !!i5047[1]
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5049 = data
  i5048.position = new pc.Vec3( i5049[0], i5049[1], i5049[2] )
  i5048.scale = new pc.Vec3( i5049[3], i5049[4], i5049[5] )
  i5048.rotation = new pc.Quat(i5049[6], i5049[7], i5049[8], i5049[9])
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5051 = data
  i5050.enabled = !!i5051[0]
  i5050.aspect = i5051[1]
  i5050.orthographic = !!i5051[2]
  i5050.orthographicSize = i5051[3]
  i5050.backgroundColor = new pc.Color(i5051[4], i5051[5], i5051[6], i5051[7])
  i5050.nearClipPlane = i5051[8]
  i5050.farClipPlane = i5051[9]
  i5050.fieldOfView = i5051[10]
  i5050.depth = i5051[11]
  i5050.clearFlags = i5051[12]
  i5050.cullingMask = i5051[13]
  i5050.rect = i5051[14]
  request.r(i5051[15], i5051[16], 0, i5050, 'targetTexture')
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5053 = data
  i5052.name = i5053[0]
  i5052.tag = i5053[1]
  i5052.enabled = !!i5053[2]
  i5052.isStatic = !!i5053[3]
  i5052.layer = i5053[4]
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5055 = data
  i5054.enabled = !!i5055[0]
  i5054.type = i5055[1]
  i5054.color = new pc.Color(i5055[2], i5055[3], i5055[4], i5055[5])
  i5054.cullingMask = i5055[6]
  i5054.intensity = i5055[7]
  i5054.range = i5055[8]
  i5054.spotAngle = i5055[9]
  i5054.shadows = i5055[10]
  i5054.shadowNormalBias = i5055[11]
  i5054.shadowBias = i5055[12]
  i5054.shadowStrength = i5055[13]
  i5054.lightmapBakeType = i5055[14]
  i5054.renderMode = i5055[15]
  request.r(i5055[16], i5055[17], 0, i5054, 'cookie')
  i5054.cookieSize = i5055[18]
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5057 = data
  request.r(i5057[0], i5057[1], 0, i5056, 'sharedMesh')
  return i5056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5059 = data
  request.r(i5059[0], i5059[1], 0, i5058, 'additionalVertexStreams')
  i5058.enabled = !!i5059[2]
  request.r(i5059[3], i5059[4], 0, i5058, 'sharedMaterial')
  var i5061 = i5059[5]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 2) {
  request.r(i5061[i + 0], i5061[i + 1], 2, i5060, '')
  }
  i5058.sharedMaterials = i5060
  i5058.receiveShadows = !!i5059[6]
  i5058.shadowCastingMode = i5059[7]
  i5058.sortingLayerID = i5059[8]
  i5058.sortingOrder = i5059[9]
  i5058.lightmapIndex = i5059[10]
  i5058.lightmapSceneIndex = i5059[11]
  i5058.lightmapScaleOffset = new pc.Vec4( i5059[12], i5059[13], i5059[14], i5059[15] )
  i5058.lightProbeUsage = i5059[16]
  i5058.reflectionProbeUsage = i5059[17]
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5065 = data
  i5064.center = new pc.Vec3( i5065[0], i5065[1], i5065[2] )
  i5064.size = new pc.Vec3( i5065[3], i5065[4], i5065[5] )
  i5064.enabled = !!i5065[6]
  i5064.isTrigger = !!i5065[7]
  request.r(i5065[8], i5065[9], 0, i5064, 'material')
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5067 = data
  i5066.name = i5067[0]
  i5066.halfPrecision = !!i5067[1]
  i5066.vertexCount = i5067[2]
  i5066.aabb = i5067[3]
  var i5069 = i5067[4]
  var i5068 = []
  for(var i = 0; i < i5069.length; i += 1) {
    i5068.push( !!i5069[i + 0] );
  }
  i5066.streams = i5068
  i5066.vertices = i5067[5]
  var i5071 = i5067[6]
  var i5070 = []
  for(var i = 0; i < i5071.length; i += 1) {
    i5070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5071[i + 0]) );
  }
  i5066.subMeshes = i5070
  var i5073 = i5067[7]
  var i5072 = []
  for(var i = 0; i < i5073.length; i += 16) {
    i5072.push( new pc.Mat4().setData(i5073[i + 0], i5073[i + 1], i5073[i + 2], i5073[i + 3],  i5073[i + 4], i5073[i + 5], i5073[i + 6], i5073[i + 7],  i5073[i + 8], i5073[i + 9], i5073[i + 10], i5073[i + 11],  i5073[i + 12], i5073[i + 13], i5073[i + 14], i5073[i + 15]) );
  }
  i5066.bindposes = i5072
  var i5075 = i5067[8]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 1) {
    i5074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5075[i + 0]) );
  }
  i5066.blendShapes = i5074
  return i5066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5081 = data
  i5080.triangles = i5081[0]
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5087 = data
  i5086.name = i5087[0]
  var i5089 = i5087[1]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5089[i + 0]) );
  }
  i5086.frames = i5088
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i5091 = data
  i5090.enabled = !!i5091[0]
  i5090.isTrigger = !!i5091[1]
  request.r(i5091[2], i5091[3], 0, i5090, 'material')
  i5090.center = new pc.Vec3( i5091[4], i5091[5], i5091[6] )
  i5090.radius = i5091[7]
  return i5090
}

Deserializers["Ball"] = function (request, data, root) {
  var i5092 = root || request.c( 'Ball' )
  var i5093 = data
  i5092.materialColor = i5093[0]
  request.r(i5093[1], i5093[2], 0, i5092, 'dropSfx')
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i5095 = data
  i5094.mass = i5095[0]
  i5094.drag = i5095[1]
  i5094.angularDrag = i5095[2]
  i5094.useGravity = !!i5095[3]
  i5094.isKinematic = !!i5095[4]
  i5094.constraints = i5095[5]
  i5094.maxAngularVelocity = i5095[6]
  i5094.collisionDetectionMode = i5095[7]
  i5094.interpolation = i5095[8]
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5097 = data
  request.r(i5097[0], i5097[1], 0, i5096, 'clip')
  i5096.playOnAwake = !!i5097[2]
  i5096.loop = !!i5097[3]
  i5096.time = i5097[4]
  i5096.enabled = !!i5097[5]
  return i5096
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5098 = root || request.c( 'GameManager' )
  var i5099 = data
  i5098.ballMoveSpeed = i5099[0]
  var i5101 = i5099[1]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 2) {
  request.r(i5101[i + 0], i5101[i + 1], 2, i5100, '')
  }
  i5098.pots = i5100
  request.r(i5099[2], i5099[3], 0, i5098, 'sortCorrectSfx')
  request.r(i5099[4], i5099[5], 0, i5098, 'levelUpSfx')
  request.r(i5099[6], i5099[7], 0, i5098, 'winVfx')
  request.r(i5099[8], i5099[9], 0, i5098, 'completedPanel')
  request.r(i5099[10], i5099[11], 0, i5098, 'finalPanel')
  request.r(i5099[12], i5099[13], 0, i5098, 'nextLevelButton')
  return i5098
}

Deserializers["Settings"] = function (request, data, root) {
  var i5104 = root || request.c( 'Settings' )
  var i5105 = data
  request.r(i5105[0], i5105[1], 0, i5104, 'settingsPanel')
  request.r(i5105[2], i5105[3], 0, i5104, 'soundToggle')
  request.r(i5105[4], i5105[5], 0, i5104, 'completedTextLabel')
  request.r(i5105[6], i5105[7], 0, i5104, 'levelTextLabel')
  request.r(i5105[8], i5105[9], 0, i5104, 'finalTextLabel')
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5107 = data
  i5106.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5107[0], i5106.main)
  i5106.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5107[1], i5106.colorBySpeed)
  i5106.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5107[2], i5106.colorOverLifetime)
  i5106.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5107[3], i5106.emission)
  i5106.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5107[4], i5106.rotationBySpeed)
  i5106.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5107[5], i5106.rotationOverLifetime)
  i5106.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5107[6], i5106.shape)
  i5106.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5107[7], i5106.sizeBySpeed)
  i5106.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5107[8], i5106.sizeOverLifetime)
  i5106.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5107[9], i5106.textureSheetAnimation)
  i5106.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5107[10], i5106.velocityOverLifetime)
  i5106.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5107[11], i5106.noise)
  i5106.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5107[12], i5106.inheritVelocity)
  i5106.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5107[13], i5106.forceOverLifetime)
  i5106.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5107[14], i5106.limitVelocityOverLifetime)
  i5106.useAutoRandomSeed = !!i5107[15]
  i5106.randomSeed = i5107[16]
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5108 = root || new pc.ParticleSystemMain()
  var i5109 = data
  i5108.duration = i5109[0]
  i5108.loop = !!i5109[1]
  i5108.prewarm = !!i5109[2]
  i5108.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[3], i5108.startDelay)
  i5108.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[4], i5108.startLifetime)
  i5108.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[5], i5108.startSpeed)
  i5108.startSize3D = !!i5109[6]
  i5108.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[7], i5108.startSizeX)
  i5108.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[8], i5108.startSizeY)
  i5108.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[9], i5108.startSizeZ)
  i5108.startRotation3D = !!i5109[10]
  i5108.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[11], i5108.startRotationX)
  i5108.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[12], i5108.startRotationY)
  i5108.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[13], i5108.startRotationZ)
  i5108.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5109[14], i5108.startColor)
  i5108.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5109[15], i5108.gravityModifier)
  i5108.simulationSpace = i5109[16]
  request.r(i5109[17], i5109[18], 0, i5108, 'customSimulationSpace')
  i5108.simulationSpeed = i5109[19]
  i5108.useUnscaledTime = !!i5109[20]
  i5108.scalingMode = i5109[21]
  i5108.playOnAwake = !!i5109[22]
  i5108.maxParticles = i5109[23]
  i5108.emitterVelocityMode = i5109[24]
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5110 = root || new pc.MinMaxCurve()
  var i5111 = data
  i5110.mode = i5111[0]
  i5110.curveMin = new pc.AnimationCurve( { keys_flow: i5111[1] } )
  i5110.curveMax = new pc.AnimationCurve( { keys_flow: i5111[2] } )
  i5110.curveMultiplier = i5111[3]
  i5110.constantMin = i5111[4]
  i5110.constantMax = i5111[5]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5112 = root || new pc.MinMaxGradient()
  var i5113 = data
  i5112.mode = i5113[0]
  i5112.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5113[1], i5112.gradientMin)
  i5112.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5113[2], i5112.gradientMax)
  i5112.colorMin = new pc.Color(i5113[3], i5113[4], i5113[5], i5113[6])
  i5112.colorMax = new pc.Color(i5113[7], i5113[8], i5113[9], i5113[10])
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5115 = data
  i5114.mode = i5115[0]
  var i5117 = i5115[1]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5117[i + 0]) );
  }
  i5114.colorKeys = i5116
  var i5119 = i5115[2]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5119[i + 0]) );
  }
  i5114.alphaKeys = i5118
  return i5114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5123 = data
  i5122.color = new pc.Color(i5123[0], i5123[1], i5123[2], i5123[3])
  i5122.time = i5123[4]
  return i5122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5127 = data
  i5126.alpha = i5127[0]
  i5126.time = i5127[1]
  return i5126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5128 = root || new pc.ParticleSystemColorBySpeed()
  var i5129 = data
  i5128.enabled = !!i5129[0]
  i5128.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5129[1], i5128.color)
  i5128.range = new pc.Vec2( i5129[2], i5129[3] )
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5130 = root || new pc.ParticleSystemColorOverLifetime()
  var i5131 = data
  i5130.enabled = !!i5131[0]
  i5130.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5131[1], i5130.color)
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5132 = root || new pc.ParticleSystemEmitter()
  var i5133 = data
  i5132.enabled = !!i5133[0]
  i5132.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5133[1], i5132.rateOverTime)
  i5132.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5133[2], i5132.rateOverDistance)
  var i5135 = i5133[3]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5135[i + 0]) );
  }
  i5132.bursts = i5134
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5138 = root || new pc.ParticleSystemBurst()
  var i5139 = data
  i5138.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5139[0], i5138.count)
  i5138.cycleCount = i5139[1]
  i5138.minCount = i5139[2]
  i5138.maxCount = i5139[3]
  i5138.repeatInterval = i5139[4]
  i5138.time = i5139[5]
  return i5138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5140 = root || new pc.ParticleSystemRotationBySpeed()
  var i5141 = data
  i5140.enabled = !!i5141[0]
  i5140.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[1], i5140.x)
  i5140.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[2], i5140.y)
  i5140.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5141[3], i5140.z)
  i5140.separateAxes = !!i5141[4]
  i5140.range = new pc.Vec2( i5141[5], i5141[6] )
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5142 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5143 = data
  i5142.enabled = !!i5143[0]
  i5142.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[1], i5142.x)
  i5142.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[2], i5142.y)
  i5142.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5143[3], i5142.z)
  i5142.separateAxes = !!i5143[4]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5144 = root || new pc.ParticleSystemShape()
  var i5145 = data
  i5144.enabled = !!i5145[0]
  i5144.shapeType = i5145[1]
  i5144.randomDirectionAmount = i5145[2]
  i5144.sphericalDirectionAmount = i5145[3]
  i5144.randomPositionAmount = i5145[4]
  i5144.alignToDirection = !!i5145[5]
  i5144.radius = i5145[6]
  i5144.radiusMode = i5145[7]
  i5144.radiusSpread = i5145[8]
  i5144.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[9], i5144.radiusSpeed)
  i5144.radiusThickness = i5145[10]
  i5144.angle = i5145[11]
  i5144.length = i5145[12]
  i5144.boxThickness = new pc.Vec3( i5145[13], i5145[14], i5145[15] )
  i5144.meshShapeType = i5145[16]
  request.r(i5145[17], i5145[18], 0, i5144, 'mesh')
  request.r(i5145[19], i5145[20], 0, i5144, 'meshRenderer')
  request.r(i5145[21], i5145[22], 0, i5144, 'skinnedMeshRenderer')
  i5144.useMeshMaterialIndex = !!i5145[23]
  i5144.meshMaterialIndex = i5145[24]
  i5144.useMeshColors = !!i5145[25]
  i5144.normalOffset = i5145[26]
  i5144.arc = i5145[27]
  i5144.arcMode = i5145[28]
  i5144.arcSpread = i5145[29]
  i5144.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5145[30], i5144.arcSpeed)
  i5144.donutRadius = i5145[31]
  i5144.position = new pc.Vec3( i5145[32], i5145[33], i5145[34] )
  i5144.rotation = new pc.Vec3( i5145[35], i5145[36], i5145[37] )
  i5144.scale = new pc.Vec3( i5145[38], i5145[39], i5145[40] )
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5146 = root || new pc.ParticleSystemSizeBySpeed()
  var i5147 = data
  i5146.enabled = !!i5147[0]
  i5146.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[1], i5146.x)
  i5146.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[2], i5146.y)
  i5146.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5147[3], i5146.z)
  i5146.separateAxes = !!i5147[4]
  i5146.range = new pc.Vec2( i5147[5], i5147[6] )
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5148 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5149 = data
  i5148.enabled = !!i5149[0]
  i5148.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5149[1], i5148.x)
  i5148.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5149[2], i5148.y)
  i5148.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5149[3], i5148.z)
  i5148.separateAxes = !!i5149[4]
  return i5148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5150 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5151 = data
  i5150.enabled = !!i5151[0]
  i5150.mode = i5151[1]
  i5150.animation = i5151[2]
  i5150.numTilesX = i5151[3]
  i5150.numTilesY = i5151[4]
  i5150.useRandomRow = !!i5151[5]
  i5150.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[6], i5150.frameOverTime)
  i5150.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5151[7], i5150.startFrame)
  i5150.cycleCount = i5151[8]
  i5150.rowIndex = i5151[9]
  i5150.flipU = i5151[10]
  i5150.flipV = i5151[11]
  i5150.spriteCount = i5151[12]
  var i5153 = i5151[13]
  var i5152 = []
  for(var i = 0; i < i5153.length; i += 2) {
  request.r(i5153[i + 0], i5153[i + 1], 2, i5152, '')
  }
  i5150.sprites = i5152
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5156 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5157 = data
  i5156.enabled = !!i5157[0]
  i5156.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[1], i5156.x)
  i5156.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[2], i5156.y)
  i5156.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[3], i5156.z)
  i5156.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5157[4], i5156.speedModifier)
  i5156.space = i5157[5]
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5158 = root || new pc.ParticleSystemNoise()
  var i5159 = data
  i5158.enabled = !!i5159[0]
  i5158.separateAxes = !!i5159[1]
  i5158.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[2], i5158.strengthX)
  i5158.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[3], i5158.strengthY)
  i5158.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[4], i5158.strengthZ)
  i5158.frequency = i5159[5]
  i5158.damping = !!i5159[6]
  i5158.octaveCount = i5159[7]
  i5158.octaveMultiplier = i5159[8]
  i5158.octaveScale = i5159[9]
  i5158.quality = i5159[10]
  i5158.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[11], i5158.scrollSpeed)
  i5158.scrollSpeedMultiplier = i5159[12]
  i5158.remapEnabled = !!i5159[13]
  i5158.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[14], i5158.remapX)
  i5158.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[15], i5158.remapY)
  i5158.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[16], i5158.remapZ)
  i5158.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[17], i5158.positionAmount)
  i5158.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[18], i5158.rotationAmount)
  i5158.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5159[19], i5158.sizeAmount)
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5160 = root || new pc.ParticleSystemInheritVelocity()
  var i5161 = data
  i5160.enabled = !!i5161[0]
  i5160.mode = i5161[1]
  i5160.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5161[2], i5160.curve)
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5162 = root || new pc.ParticleSystemForceOverLifetime()
  var i5163 = data
  i5162.enabled = !!i5163[0]
  i5162.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5163[1], i5162.x)
  i5162.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5163[2], i5162.y)
  i5162.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5163[3], i5162.z)
  i5162.space = i5163[4]
  i5162.randomized = !!i5163[5]
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5164 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5165 = data
  i5164.enabled = !!i5165[0]
  i5164.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[1], i5164.limitX)
  i5164.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[2], i5164.limitY)
  i5164.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[3], i5164.limitZ)
  i5164.dampen = i5165[4]
  i5164.separateAxes = !!i5165[5]
  i5164.space = i5165[6]
  i5164.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5165[7], i5164.drag)
  i5164.multiplyDragByParticleSize = !!i5165[8]
  i5164.multiplyDragByParticleVelocity = !!i5165[9]
  return i5164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5167 = data
  i5166.enabled = !!i5167[0]
  request.r(i5167[1], i5167[2], 0, i5166, 'sharedMaterial')
  var i5169 = i5167[3]
  var i5168 = []
  for(var i = 0; i < i5169.length; i += 2) {
  request.r(i5169[i + 0], i5169[i + 1], 2, i5168, '')
  }
  i5166.sharedMaterials = i5168
  i5166.receiveShadows = !!i5167[4]
  i5166.shadowCastingMode = i5167[5]
  i5166.sortingLayerID = i5167[6]
  i5166.sortingOrder = i5167[7]
  i5166.lightmapIndex = i5167[8]
  i5166.lightmapSceneIndex = i5167[9]
  i5166.lightmapScaleOffset = new pc.Vec4( i5167[10], i5167[11], i5167[12], i5167[13] )
  i5166.lightProbeUsage = i5167[14]
  i5166.reflectionProbeUsage = i5167[15]
  request.r(i5167[16], i5167[17], 0, i5166, 'mesh')
  i5166.meshCount = i5167[18]
  i5166.activeVertexStreamsCount = i5167[19]
  i5166.alignment = i5167[20]
  i5166.renderMode = i5167[21]
  i5166.sortMode = i5167[22]
  i5166.lengthScale = i5167[23]
  i5166.velocityScale = i5167[24]
  i5166.cameraVelocityScale = i5167[25]
  i5166.normalDirection = i5167[26]
  i5166.sortingFudge = i5167[27]
  i5166.minParticleSize = i5167[28]
  i5166.maxParticleSize = i5167[29]
  i5166.pivot = new pc.Vec3( i5167[30], i5167[31], i5167[32] )
  request.r(i5167[33], i5167[34], 0, i5166, 'trailMaterial')
  return i5166
}

Deserializers["Pot"] = function (request, data, root) {
  var i5170 = root || request.c( 'Pot' )
  var i5171 = data
  var i5173 = i5171[0]
  var i5172 = []
  for(var i = 0; i < i5173.length; i += 2) {
  request.r(i5173[i + 0], i5173[i + 1], 2, i5172, '')
  }
  i5170.balls = i5172
  request.r(i5171[1], i5171[2], 0, i5170, 'ballStop')
  i5170.topBallIndex = i5171[3]
  request.r(i5171[4], i5171[5], 0, i5170, 'ballPickupSfx')
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i5176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i5177 = data
  i5176.center = new pc.Vec3( i5177[0], i5177[1], i5177[2] )
  i5176.radius = i5177[3]
  i5176.height = i5177[4]
  i5176.direction = i5177[5]
  i5176.enabled = !!i5177[6]
  i5176.isTrigger = !!i5177[7]
  request.r(i5177[8], i5177[9], 0, i5176, 'material')
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5179 = data
  request.r(i5179[0], i5179[1], 0, i5178, 'animatorController')
  i5178.updateMode = i5179[2]
  var i5181 = i5179[3]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 2) {
  request.r(i5181[i + 0], i5181[i + 1], 2, i5180, '')
  }
  i5178.humanBones = i5180
  i5178.enabled = !!i5179[4]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5185 = data
  i5184.pivot = new pc.Vec2( i5185[0], i5185[1] )
  i5184.anchorMin = new pc.Vec2( i5185[2], i5185[3] )
  i5184.anchorMax = new pc.Vec2( i5185[4], i5185[5] )
  i5184.sizeDelta = new pc.Vec2( i5185[6], i5185[7] )
  i5184.anchoredPosition3D = new pc.Vec3( i5185[8], i5185[9], i5185[10] )
  i5184.rotation = new pc.Quat(i5185[11], i5185[12], i5185[13], i5185[14])
  i5184.scale = new pc.Vec3( i5185[15], i5185[16], i5185[17] )
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5187 = data
  i5186.enabled = !!i5187[0]
  i5186.planeDistance = i5187[1]
  i5186.referencePixelsPerUnit = i5187[2]
  i5186.isFallbackOverlay = !!i5187[3]
  i5186.renderMode = i5187[4]
  i5186.renderOrder = i5187[5]
  i5186.sortingLayerName = i5187[6]
  i5186.sortingOrder = i5187[7]
  i5186.scaleFactor = i5187[8]
  request.r(i5187[9], i5187[10], 0, i5186, 'worldCamera')
  i5186.overrideSorting = !!i5187[11]
  i5186.pixelPerfect = !!i5187[12]
  i5186.targetDisplay = i5187[13]
  i5186.overridePixelPerfect = !!i5187[14]
  return i5186
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5188 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5189 = data
  i5188.m_UiScaleMode = i5189[0]
  i5188.m_ReferencePixelsPerUnit = i5189[1]
  i5188.m_ScaleFactor = i5189[2]
  i5188.m_ReferenceResolution = new pc.Vec2( i5189[3], i5189[4] )
  i5188.m_ScreenMatchMode = i5189[5]
  i5188.m_MatchWidthOrHeight = i5189[6]
  i5188.m_PhysicalUnit = i5189[7]
  i5188.m_FallbackScreenDPI = i5189[8]
  i5188.m_DefaultSpriteDPI = i5189[9]
  i5188.m_DynamicPixelsPerUnit = i5189[10]
  i5188.m_PresetInfoIsWorld = !!i5189[11]
  return i5188
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5190 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5191 = data
  i5190.m_IgnoreReversedGraphics = !!i5191[0]
  i5190.m_BlockingObjects = i5191[1]
  i5190.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5191[2] )
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5193 = data
  i5192.cullTransparentMesh = !!i5193[0]
  return i5192
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5194 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5195 = data
  i5194.m_hasFontAssetChanged = !!i5195[0]
  request.r(i5195[1], i5195[2], 0, i5194, 'm_baseMaterial')
  i5194.m_maskOffset = new pc.Vec4( i5195[3], i5195[4], i5195[5], i5195[6] )
  i5194.m_text = i5195[7]
  i5194.m_isRightToLeft = !!i5195[8]
  request.r(i5195[9], i5195[10], 0, i5194, 'm_fontAsset')
  request.r(i5195[11], i5195[12], 0, i5194, 'm_sharedMaterial')
  var i5197 = i5195[13]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 2) {
  request.r(i5197[i + 0], i5197[i + 1], 2, i5196, '')
  }
  i5194.m_fontSharedMaterials = i5196
  request.r(i5195[14], i5195[15], 0, i5194, 'm_fontMaterial')
  var i5199 = i5195[16]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 2) {
  request.r(i5199[i + 0], i5199[i + 1], 2, i5198, '')
  }
  i5194.m_fontMaterials = i5198
  i5194.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5195[17], i5195[18], i5195[19], i5195[20])
  i5194.m_fontColor = new pc.Color(i5195[21], i5195[22], i5195[23], i5195[24])
  i5194.m_enableVertexGradient = !!i5195[25]
  i5194.m_colorMode = i5195[26]
  i5194.m_fontColorGradient = request.d('TMPro.VertexGradient', i5195[27], i5194.m_fontColorGradient)
  request.r(i5195[28], i5195[29], 0, i5194, 'm_fontColorGradientPreset')
  request.r(i5195[30], i5195[31], 0, i5194, 'm_spriteAsset')
  i5194.m_tintAllSprites = !!i5195[32]
  request.r(i5195[33], i5195[34], 0, i5194, 'm_StyleSheet')
  i5194.m_TextStyleHashCode = i5195[35]
  i5194.m_overrideHtmlColors = !!i5195[36]
  i5194.m_faceColor = UnityEngine.Color32.ConstructColor(i5195[37], i5195[38], i5195[39], i5195[40])
  i5194.m_fontSize = i5195[41]
  i5194.m_fontSizeBase = i5195[42]
  i5194.m_fontWeight = i5195[43]
  i5194.m_enableAutoSizing = !!i5195[44]
  i5194.m_fontSizeMin = i5195[45]
  i5194.m_fontSizeMax = i5195[46]
  i5194.m_fontStyle = i5195[47]
  i5194.m_HorizontalAlignment = i5195[48]
  i5194.m_VerticalAlignment = i5195[49]
  i5194.m_textAlignment = i5195[50]
  i5194.m_characterSpacing = i5195[51]
  i5194.m_wordSpacing = i5195[52]
  i5194.m_lineSpacing = i5195[53]
  i5194.m_lineSpacingMax = i5195[54]
  i5194.m_paragraphSpacing = i5195[55]
  i5194.m_charWidthMaxAdj = i5195[56]
  i5194.m_enableWordWrapping = !!i5195[57]
  i5194.m_wordWrappingRatios = i5195[58]
  i5194.m_overflowMode = i5195[59]
  request.r(i5195[60], i5195[61], 0, i5194, 'm_linkedTextComponent')
  request.r(i5195[62], i5195[63], 0, i5194, 'parentLinkedComponent')
  i5194.m_enableKerning = !!i5195[64]
  i5194.m_enableExtraPadding = !!i5195[65]
  i5194.checkPaddingRequired = !!i5195[66]
  i5194.m_isRichText = !!i5195[67]
  i5194.m_parseCtrlCharacters = !!i5195[68]
  i5194.m_isOrthographic = !!i5195[69]
  i5194.m_isCullingEnabled = !!i5195[70]
  i5194.m_horizontalMapping = i5195[71]
  i5194.m_verticalMapping = i5195[72]
  i5194.m_uvLineOffset = i5195[73]
  i5194.m_geometrySortingOrder = i5195[74]
  i5194.m_IsTextObjectScaleStatic = !!i5195[75]
  i5194.m_VertexBufferAutoSizeReduction = !!i5195[76]
  i5194.m_useMaxVisibleDescender = !!i5195[77]
  i5194.m_pageToDisplay = i5195[78]
  i5194.m_margin = new pc.Vec4( i5195[79], i5195[80], i5195[81], i5195[82] )
  i5194.m_isUsingLegacyAnimationComponent = !!i5195[83]
  i5194.m_isVolumetricText = !!i5195[84]
  request.r(i5195[85], i5195[86], 0, i5194, 'm_Material')
  i5194.m_Maskable = !!i5195[87]
  i5194.m_Color = new pc.Color(i5195[88], i5195[89], i5195[90], i5195[91])
  i5194.m_RaycastTarget = !!i5195[92]
  i5194.m_RaycastPadding = new pc.Vec4( i5195[93], i5195[94], i5195[95], i5195[96] )
  return i5194
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5200 = root || request.c( 'TMPro.VertexGradient' )
  var i5201 = data
  i5200.topLeft = new pc.Color(i5201[0], i5201[1], i5201[2], i5201[3])
  i5200.topRight = new pc.Color(i5201[4], i5201[5], i5201[6], i5201[7])
  i5200.bottomLeft = new pc.Color(i5201[8], i5201[9], i5201[10], i5201[11])
  i5200.bottomRight = new pc.Color(i5201[12], i5201[13], i5201[14], i5201[15])
  return i5200
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5202 = root || request.c( 'UnityEngine.UI.Image' )
  var i5203 = data
  request.r(i5203[0], i5203[1], 0, i5202, 'm_Sprite')
  i5202.m_Type = i5203[2]
  i5202.m_PreserveAspect = !!i5203[3]
  i5202.m_FillCenter = !!i5203[4]
  i5202.m_FillMethod = i5203[5]
  i5202.m_FillAmount = i5203[6]
  i5202.m_FillClockwise = !!i5203[7]
  i5202.m_FillOrigin = i5203[8]
  i5202.m_UseSpriteMesh = !!i5203[9]
  i5202.m_PixelsPerUnitMultiplier = i5203[10]
  request.r(i5203[11], i5203[12], 0, i5202, 'm_Material')
  i5202.m_Maskable = !!i5203[13]
  i5202.m_Color = new pc.Color(i5203[14], i5203[15], i5203[16], i5203[17])
  i5202.m_RaycastTarget = !!i5203[18]
  i5202.m_RaycastPadding = new pc.Vec4( i5203[19], i5203[20], i5203[21], i5203[22] )
  return i5202
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5204 = root || request.c( 'UnityEngine.UI.Button' )
  var i5205 = data
  i5204.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5205[0], i5204.m_OnClick)
  i5204.m_Navigation = request.d('UnityEngine.UI.Navigation', i5205[1], i5204.m_Navigation)
  i5204.m_Transition = i5205[2]
  i5204.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5205[3], i5204.m_Colors)
  i5204.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5205[4], i5204.m_SpriteState)
  i5204.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5205[5], i5204.m_AnimationTriggers)
  i5204.m_Interactable = !!i5205[6]
  request.r(i5205[7], i5205[8], 0, i5204, 'm_TargetGraphic')
  return i5204
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5206 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5207 = data
  i5206.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5207[0], i5206.m_PersistentCalls)
  return i5206
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5208 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5209 = data
  var i5211 = i5209[0]
  var i5210 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5211.length; i += 1) {
    i5210.add(request.d('UnityEngine.Events.PersistentCall', i5211[i + 0]));
  }
  i5208.m_Calls = i5210
  return i5208
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5214 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'm_Target')
  i5214.m_TargetAssemblyTypeName = i5215[2]
  i5214.m_MethodName = i5215[3]
  i5214.m_Mode = i5215[4]
  i5214.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5215[5], i5214.m_Arguments)
  i5214.m_CallState = i5215[6]
  return i5214
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5216 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5217 = data
  request.r(i5217[0], i5217[1], 0, i5216, 'm_ObjectArgument')
  i5216.m_ObjectArgumentAssemblyTypeName = i5217[2]
  i5216.m_IntArgument = i5217[3]
  i5216.m_FloatArgument = i5217[4]
  i5216.m_StringArgument = i5217[5]
  i5216.m_BoolArgument = !!i5217[6]
  return i5216
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5218 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5219 = data
  i5218.m_Mode = i5219[0]
  i5218.m_WrapAround = !!i5219[1]
  request.r(i5219[2], i5219[3], 0, i5218, 'm_SelectOnUp')
  request.r(i5219[4], i5219[5], 0, i5218, 'm_SelectOnDown')
  request.r(i5219[6], i5219[7], 0, i5218, 'm_SelectOnLeft')
  request.r(i5219[8], i5219[9], 0, i5218, 'm_SelectOnRight')
  return i5218
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5220 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5221 = data
  i5220.m_NormalColor = new pc.Color(i5221[0], i5221[1], i5221[2], i5221[3])
  i5220.m_HighlightedColor = new pc.Color(i5221[4], i5221[5], i5221[6], i5221[7])
  i5220.m_PressedColor = new pc.Color(i5221[8], i5221[9], i5221[10], i5221[11])
  i5220.m_SelectedColor = new pc.Color(i5221[12], i5221[13], i5221[14], i5221[15])
  i5220.m_DisabledColor = new pc.Color(i5221[16], i5221[17], i5221[18], i5221[19])
  i5220.m_ColorMultiplier = i5221[20]
  i5220.m_FadeDuration = i5221[21]
  return i5220
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5222 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5223 = data
  request.r(i5223[0], i5223[1], 0, i5222, 'm_HighlightedSprite')
  request.r(i5223[2], i5223[3], 0, i5222, 'm_PressedSprite')
  request.r(i5223[4], i5223[5], 0, i5222, 'm_SelectedSprite')
  request.r(i5223[6], i5223[7], 0, i5222, 'm_DisabledSprite')
  return i5222
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5224 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5225 = data
  i5224.m_NormalTrigger = i5225[0]
  i5224.m_HighlightedTrigger = i5225[1]
  i5224.m_PressedTrigger = i5225[2]
  i5224.m_SelectedTrigger = i5225[3]
  i5224.m_DisabledTrigger = i5225[4]
  return i5224
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i5226 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i5227 = data
  i5226.toggleTransition = i5227[0]
  request.r(i5227[1], i5227[2], 0, i5226, 'graphic')
  i5226.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i5227[3], i5226.onValueChanged)
  request.r(i5227[4], i5227[5], 0, i5226, 'm_Group')
  i5226.m_IsOn = !!i5227[6]
  i5226.m_Navigation = request.d('UnityEngine.UI.Navigation', i5227[7], i5226.m_Navigation)
  i5226.m_Transition = i5227[8]
  i5226.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5227[9], i5226.m_Colors)
  i5226.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5227[10], i5226.m_SpriteState)
  i5226.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5227[11], i5226.m_AnimationTriggers)
  i5226.m_Interactable = !!i5227[12]
  request.r(i5227[13], i5227[14], 0, i5226, 'm_TargetGraphic')
  return i5226
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i5228 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i5229 = data
  i5228.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5229[0], i5228.m_PersistentCalls)
  return i5228
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5230 = root || request.c( 'UnityEngine.UI.Text' )
  var i5231 = data
  i5230.m_FontData = request.d('UnityEngine.UI.FontData', i5231[0], i5230.m_FontData)
  i5230.m_Text = i5231[1]
  request.r(i5231[2], i5231[3], 0, i5230, 'm_Material')
  i5230.m_Maskable = !!i5231[4]
  i5230.m_Color = new pc.Color(i5231[5], i5231[6], i5231[7], i5231[8])
  i5230.m_RaycastTarget = !!i5231[9]
  i5230.m_RaycastPadding = new pc.Vec4( i5231[10], i5231[11], i5231[12], i5231[13] )
  return i5230
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5232 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5233 = data
  request.r(i5233[0], i5233[1], 0, i5232, 'm_Font')
  i5232.m_FontSize = i5233[2]
  i5232.m_FontStyle = i5233[3]
  i5232.m_BestFit = !!i5233[4]
  i5232.m_MinSize = i5233[5]
  i5232.m_MaxSize = i5233[6]
  i5232.m_Alignment = i5233[7]
  i5232.m_AlignByGeometry = !!i5233[8]
  i5232.m_RichText = !!i5233[9]
  i5232.m_HorizontalOverflow = i5233[10]
  i5232.m_VerticalOverflow = i5233[11]
  i5232.m_LineSpacing = i5233[12]
  return i5232
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5234 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5235 = data
  i5234.hashCode = i5235[0]
  request.r(i5235[1], i5235[2], 0, i5234, 'material')
  i5234.materialHashCode = i5235[3]
  request.r(i5235[4], i5235[5], 0, i5234, 'atlas')
  i5234.normalStyle = i5235[6]
  i5234.normalSpacingOffset = i5235[7]
  i5234.boldStyle = i5235[8]
  i5234.boldSpacing = i5235[9]
  i5234.italicStyle = i5235[10]
  i5234.tabSize = i5235[11]
  i5234.m_Version = i5235[12]
  i5234.m_SourceFontFileGUID = i5235[13]
  request.r(i5235[14], i5235[15], 0, i5234, 'm_SourceFontFile_EditorRef')
  request.r(i5235[16], i5235[17], 0, i5234, 'm_SourceFontFile')
  i5234.m_AtlasPopulationMode = i5235[18]
  i5234.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5235[19], i5234.m_FaceInfo)
  var i5237 = i5235[20]
  var i5236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.add(request.d('UnityEngine.TextCore.Glyph', i5237[i + 0]));
  }
  i5234.m_GlyphTable = i5236
  var i5239 = i5235[21]
  var i5238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.add(request.d('TMPro.TMP_Character', i5239[i + 0]));
  }
  i5234.m_CharacterTable = i5238
  var i5241 = i5235[22]
  var i5240 = []
  for(var i = 0; i < i5241.length; i += 2) {
  request.r(i5241[i + 0], i5241[i + 1], 2, i5240, '')
  }
  i5234.m_AtlasTextures = i5240
  i5234.m_AtlasTextureIndex = i5235[23]
  i5234.m_IsMultiAtlasTexturesEnabled = !!i5235[24]
  var i5243 = i5235[25]
  var i5242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5243.length; i += 1) {
    i5242.add(request.d('UnityEngine.TextCore.GlyphRect', i5243[i + 0]));
  }
  i5234.m_UsedGlyphRects = i5242
  var i5245 = i5235[26]
  var i5244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.add(request.d('UnityEngine.TextCore.GlyphRect', i5245[i + 0]));
  }
  i5234.m_FreeGlyphRects = i5244
  i5234.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5235[27], i5234.m_fontInfo)
  i5234.m_AtlasWidth = i5235[28]
  i5234.m_AtlasHeight = i5235[29]
  i5234.m_AtlasPadding = i5235[30]
  i5234.m_AtlasRenderMode = i5235[31]
  var i5247 = i5235[32]
  var i5246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5247.length; i += 1) {
    i5246.add(request.d('TMPro.TMP_Glyph', i5247[i + 0]));
  }
  i5234.m_glyphInfoList = i5246
  i5234.m_KerningTable = request.d('TMPro.KerningTable', i5235[33], i5234.m_KerningTable)
  i5234.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5235[34], i5234.m_FontFeatureTable)
  var i5249 = i5235[35]
  var i5248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5249.length; i += 2) {
  request.r(i5249[i + 0], i5249[i + 1], 1, i5248, '')
  }
  i5234.fallbackFontAssets = i5248
  var i5251 = i5235[36]
  var i5250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5251.length; i += 2) {
  request.r(i5251[i + 0], i5251[i + 1], 1, i5250, '')
  }
  i5234.m_FallbackFontAssetTable = i5250
  i5234.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5235[37], i5234.m_CreationSettings)
  var i5253 = i5235[38]
  var i5252 = []
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.push( request.d('TMPro.TMP_FontWeightPair', i5253[i + 0]) );
  }
  i5234.m_FontWeightTable = i5252
  var i5255 = i5235[39]
  var i5254 = []
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.push( request.d('TMPro.TMP_FontWeightPair', i5255[i + 0]) );
  }
  i5234.fontWeights = i5254
  return i5234
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5256 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5257 = data
  i5256.m_FaceIndex = i5257[0]
  i5256.m_FamilyName = i5257[1]
  i5256.m_StyleName = i5257[2]
  i5256.m_PointSize = i5257[3]
  i5256.m_Scale = i5257[4]
  i5256.m_LineHeight = i5257[5]
  i5256.m_AscentLine = i5257[6]
  i5256.m_CapLine = i5257[7]
  i5256.m_MeanLine = i5257[8]
  i5256.m_Baseline = i5257[9]
  i5256.m_DescentLine = i5257[10]
  i5256.m_SuperscriptOffset = i5257[11]
  i5256.m_SuperscriptSize = i5257[12]
  i5256.m_SubscriptOffset = i5257[13]
  i5256.m_SubscriptSize = i5257[14]
  i5256.m_UnderlineOffset = i5257[15]
  i5256.m_UnderlineThickness = i5257[16]
  i5256.m_StrikethroughOffset = i5257[17]
  i5256.m_StrikethroughThickness = i5257[18]
  i5256.m_TabWidth = i5257[19]
  return i5256
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5260 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5261 = data
  i5260.m_Index = i5261[0]
  i5260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5261[1], i5260.m_Metrics)
  i5260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5261[2], i5260.m_GlyphRect)
  i5260.m_Scale = i5261[3]
  i5260.m_AtlasIndex = i5261[4]
  return i5260
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5262 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5263 = data
  i5262.m_Width = i5263[0]
  i5262.m_Height = i5263[1]
  i5262.m_HorizontalBearingX = i5263[2]
  i5262.m_HorizontalBearingY = i5263[3]
  i5262.m_HorizontalAdvance = i5263[4]
  return i5262
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5265 = data
  i5264.m_X = i5265[0]
  i5264.m_Y = i5265[1]
  i5264.m_Width = i5265[2]
  i5264.m_Height = i5265[3]
  return i5264
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5268 = root || request.c( 'TMPro.TMP_Character' )
  var i5269 = data
  i5268.m_ElementType = i5269[0]
  i5268.m_Unicode = i5269[1]
  i5268.m_GlyphIndex = i5269[2]
  i5268.m_Scale = i5269[3]
  return i5268
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5274 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5275 = data
  i5274.Name = i5275[0]
  i5274.PointSize = i5275[1]
  i5274.Scale = i5275[2]
  i5274.CharacterCount = i5275[3]
  i5274.LineHeight = i5275[4]
  i5274.Baseline = i5275[5]
  i5274.Ascender = i5275[6]
  i5274.CapHeight = i5275[7]
  i5274.Descender = i5275[8]
  i5274.CenterLine = i5275[9]
  i5274.SuperscriptOffset = i5275[10]
  i5274.SubscriptOffset = i5275[11]
  i5274.SubSize = i5275[12]
  i5274.Underline = i5275[13]
  i5274.UnderlineThickness = i5275[14]
  i5274.strikethrough = i5275[15]
  i5274.strikethroughThickness = i5275[16]
  i5274.TabWidth = i5275[17]
  i5274.Padding = i5275[18]
  i5274.AtlasWidth = i5275[19]
  i5274.AtlasHeight = i5275[20]
  return i5274
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5278 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5279 = data
  i5278.id = i5279[0]
  i5278.x = i5279[1]
  i5278.y = i5279[2]
  i5278.width = i5279[3]
  i5278.height = i5279[4]
  i5278.xOffset = i5279[5]
  i5278.yOffset = i5279[6]
  i5278.xAdvance = i5279[7]
  i5278.scale = i5279[8]
  return i5278
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5280 = root || request.c( 'TMPro.KerningTable' )
  var i5281 = data
  var i5283 = i5281[0]
  var i5282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5283.length; i += 1) {
    i5282.add(request.d('TMPro.KerningPair', i5283[i + 0]));
  }
  i5280.kerningPairs = i5282
  return i5280
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5286 = root || request.c( 'TMPro.KerningPair' )
  var i5287 = data
  i5286.xOffset = i5287[0]
  i5286.m_FirstGlyph = i5287[1]
  i5286.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5287[2], i5286.m_FirstGlyphAdjustments)
  i5286.m_SecondGlyph = i5287[3]
  i5286.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5287[4], i5286.m_SecondGlyphAdjustments)
  i5286.m_IgnoreSpacingAdjustments = !!i5287[5]
  return i5286
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5288 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5289 = data
  var i5291 = i5289[0]
  var i5290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5291[i + 0]));
  }
  i5288.m_GlyphPairAdjustmentRecords = i5290
  return i5288
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5294 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5295 = data
  i5294.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5295[0], i5294.m_FirstAdjustmentRecord)
  i5294.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5295[1], i5294.m_SecondAdjustmentRecord)
  i5294.m_FeatureLookupFlags = i5295[2]
  return i5294
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5298 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5299 = data
  i5298.sourceFontFileName = i5299[0]
  i5298.sourceFontFileGUID = i5299[1]
  i5298.pointSizeSamplingMode = i5299[2]
  i5298.pointSize = i5299[3]
  i5298.padding = i5299[4]
  i5298.packingMode = i5299[5]
  i5298.atlasWidth = i5299[6]
  i5298.atlasHeight = i5299[7]
  i5298.characterSetSelectionMode = i5299[8]
  i5298.characterSequence = i5299[9]
  i5298.referencedFontAssetGUID = i5299[10]
  i5298.referencedTextAssetGUID = i5299[11]
  i5298.fontStyle = i5299[12]
  i5298.fontStyleModifier = i5299[13]
  i5298.renderMode = i5299[14]
  i5298.includeFontFeatures = !!i5299[15]
  return i5298
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5302 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5303 = data
  request.r(i5303[0], i5303[1], 0, i5302, 'regularTypeface')
  request.r(i5303[2], i5303[3], 0, i5302, 'italicTypeface')
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5305 = data
  i5304.name = i5305[0]
  i5304.width = i5305[1]
  i5304.height = i5305[2]
  i5304.mipmapCount = i5305[3]
  i5304.anisoLevel = i5305[4]
  i5304.filterMode = i5305[5]
  i5304.hdr = !!i5305[6]
  i5304.format = i5305[7]
  i5304.wrapMode = i5305[8]
  i5304.alphaIsTransparency = !!i5305[9]
  i5304.alphaSource = i5305[10]
  return i5304
}

Deserializers["SceneLoader"] = function (request, data, root) {
  var i5306 = root || request.c( 'SceneLoader' )
  var i5307 = data
  return i5306
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5308 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5309 = data
  request.r(i5309[0], i5309[1], 0, i5308, 'm_FirstSelected')
  i5308.m_sendNavigationEvents = !!i5309[2]
  i5308.m_DragThreshold = i5309[3]
  return i5308
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5310 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5311 = data
  i5310.m_HorizontalAxis = i5311[0]
  i5310.m_VerticalAxis = i5311[1]
  i5310.m_SubmitButton = i5311[2]
  i5310.m_CancelButton = i5311[3]
  i5310.m_InputActionsPerSecond = i5311[4]
  i5310.m_RepeatDelay = i5311[5]
  i5310.m_ForceModuleActive = !!i5311[6]
  return i5310
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i5312 = root || request.c( 'AudioManager' )
  var i5313 = data
  request.r(i5313[0], i5313[1], 0, i5312, 'sortItAudioMixer')
  return i5312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i5314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i5315 = data
  var i5317 = i5315[0]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 1) {
    i5316.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i5317[i + 0]) );
  }
  i5314.groups = i5316
  var i5319 = i5315[1]
  var i5318 = []
  for(var i = 0; i < i5319.length; i += 1) {
    i5318.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i5319[i + 0]) );
  }
  i5314.snapshots = i5318
  return i5314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i5322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i5323 = data
  i5322.id = i5323[0]
  var i5325 = i5323[1]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 1) {
    i5324.push( i5325[i + 0] );
  }
  i5322.childGroupIds = i5324
  i5322.name = i5323[2]
  return i5322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i5330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i5331 = data
  i5330.id = i5331[0]
  var i5333 = i5331[1]
  var i5332 = []
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i5333[i + 0]) );
  }
  i5330.parameters = i5332
  return i5330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5337 = data
  i5336.name = i5337[0]
  i5336.value = i5337[1]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5339 = data
  i5338.name = i5339[0]
  i5338.atlasId = i5339[1]
  i5338.mipmapCount = i5339[2]
  i5338.hdr = !!i5339[3]
  i5338.size = i5339[4]
  i5338.anisoLevel = i5339[5]
  i5338.filterMode = i5339[6]
  i5338.wrapMode = i5339[7]
  var i5341 = i5339[8]
  var i5340 = []
  for(var i = 0; i < i5341.length; i += 4) {
    i5340.push( UnityEngine.Rect.MinMaxRect(i5341[i + 0], i5341[i + 1], i5341[i + 2], i5341[i + 3]) );
  }
  i5338.rects = i5340
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5345 = data
  i5344.name = i5345[0]
  i5344.index = i5345[1]
  i5344.startup = !!i5345[2]
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5347 = data
  i5346.ambientIntensity = i5347[0]
  i5346.reflectionIntensity = i5347[1]
  i5346.ambientMode = i5347[2]
  i5346.ambientLight = new pc.Color(i5347[3], i5347[4], i5347[5], i5347[6])
  i5346.ambientSkyColor = new pc.Color(i5347[7], i5347[8], i5347[9], i5347[10])
  i5346.ambientGroundColor = new pc.Color(i5347[11], i5347[12], i5347[13], i5347[14])
  i5346.ambientEquatorColor = new pc.Color(i5347[15], i5347[16], i5347[17], i5347[18])
  i5346.fogColor = new pc.Color(i5347[19], i5347[20], i5347[21], i5347[22])
  i5346.fogEndDistance = i5347[23]
  i5346.fogStartDistance = i5347[24]
  i5346.fogDensity = i5347[25]
  i5346.fog = !!i5347[26]
  request.r(i5347[27], i5347[28], 0, i5346, 'skybox')
  i5346.fogMode = i5347[29]
  var i5349 = i5347[30]
  var i5348 = []
  for(var i = 0; i < i5349.length; i += 1) {
    i5348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5349[i + 0]) );
  }
  i5346.lightmaps = i5348
  i5346.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5347[31], i5346.lightProbes)
  i5346.lightmapsMode = i5347[32]
  i5346.environmentLightingMode = i5347[33]
  i5346.ambientProbe = new pc.SphericalHarmonicsL2(i5347[34])
  request.r(i5347[35], i5347[36], 0, i5346, 'customReflection')
  request.r(i5347[37], i5347[38], 0, i5346, 'defaultReflection')
  i5346.defaultReflectionMode = i5347[39]
  i5346.defaultReflectionResolution = i5347[40]
  i5346.sunLightObjectId = i5347[41]
  i5346.pixelLightCount = i5347[42]
  i5346.defaultReflectionHDR = !!i5347[43]
  i5346.hasLightDataAsset = !!i5347[44]
  i5346.hasManualGenerate = !!i5347[45]
  return i5346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5353 = data
  request.r(i5353[0], i5353[1], 0, i5352, 'lightmapColor')
  request.r(i5353[2], i5353[3], 0, i5352, 'lightmapDirection')
  return i5352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5354 = root || new UnityEngine.LightProbes()
  var i5355 = data
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5363 = data
  i5362.name = i5363[0]
  var i5365 = i5363[1]
  var i5364 = []
  for(var i = 0; i < i5365.length; i += 1) {
    i5364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5365[i + 0]) );
  }
  i5362.passes = i5364
  var i5367 = i5363[2]
  var i5366 = []
  for(var i = 0; i < i5367.length; i += 1) {
    i5366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5367[i + 0]) );
  }
  i5362.defaultParameterValues = i5366
  request.r(i5363[3], i5363[4], 0, i5362, 'unityFallbackShader')
  i5362.readDepth = !!i5363[5]
  return i5362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5370 = root || new pc.UnityShaderPass()
  var i5371 = data
  i5370.passType = i5371[0]
  i5370.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[1], i5370.zTest)
  i5370.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[2], i5370.zWrite)
  i5370.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[3], i5370.culling)
  i5370.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5371[4], i5370.blending)
  i5370.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5371[5], i5370.alphaBlending)
  i5370.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[6], i5370.colorWriteMask)
  i5370.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[7], i5370.offsetUnits)
  i5370.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[8], i5370.offsetFactor)
  i5370.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[9], i5370.stencilRef)
  i5370.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[10], i5370.stencilReadMask)
  i5370.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5371[11], i5370.stencilWriteMask)
  i5370.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5371[12], i5370.stencilOp)
  i5370.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5371[13], i5370.stencilOpFront)
  i5370.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5371[14], i5370.stencilOpBack)
  var i5373 = i5371[15]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5373[i + 0]) );
  }
  i5370.tags = i5372
  var i5375 = i5371[16]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5375[i + 0]) );
  }
  i5370.variants = i5374
  i5370.readDepth = !!i5371[17]
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5377 = data
  i5376.val = i5377[0]
  i5376.name = i5377[1]
  return i5376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5379 = data
  i5378.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5379[0], i5378.src)
  i5378.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5379[1], i5378.dst)
  i5378.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5379[2], i5378.op)
  return i5378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5381 = data
  i5380.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5381[0], i5380.pass)
  i5380.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5381[1], i5380.fail)
  i5380.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5381[2], i5380.zFail)
  i5380.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5381[3], i5380.comp)
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5385 = data
  i5384.name = i5385[0]
  i5384.value = i5385[1]
  return i5384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5389 = data
  var i5391 = i5389[0]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 1) {
    i5390.push( i5391[i + 0] );
  }
  i5388.keywords = i5390
  i5388.vertexProgram = i5389[1]
  i5388.fragmentProgram = i5389[2]
  i5388.readDepth = !!i5389[3]
  return i5388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5395 = data
  i5394.name = i5395[0]
  i5394.type = i5395[1]
  i5394.value = new pc.Vec4( i5395[2], i5395[3], i5395[4], i5395[5] )
  i5394.textureValue = i5395[6]
  return i5394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5397 = data
  i5396.name = i5397[0]
  request.r(i5397[1], i5397[2], 0, i5396, 'texture')
  i5396.aabb = i5397[3]
  i5396.vertices = i5397[4]
  i5396.triangles = i5397[5]
  i5396.textureRect = UnityEngine.Rect.MinMaxRect(i5397[6], i5397[7], i5397[8], i5397[9])
  i5396.packedRect = UnityEngine.Rect.MinMaxRect(i5397[10], i5397[11], i5397[12], i5397[13])
  i5396.border = new pc.Vec4( i5397[14], i5397[15], i5397[16], i5397[17] )
  i5396.transparency = i5397[18]
  i5396.bounds = i5397[19]
  i5396.pixelsPerUnit = i5397[20]
  i5396.textureWidth = i5397[21]
  i5396.textureHeight = i5397[22]
  i5396.nativeSize = new pc.Vec2( i5397[23], i5397[24] )
  i5396.pivot = new pc.Vec2( i5397[25], i5397[26] )
  i5396.textureRectOffset = new pc.Vec2( i5397[27], i5397[28] )
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5399 = data
  i5398.name = i5399[0]
  return i5398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5401 = data
  i5400.name = i5401[0]
  i5400.wrapMode = i5401[1]
  i5400.isLooping = !!i5401[2]
  i5400.length = i5401[3]
  var i5403 = i5401[4]
  var i5402 = []
  for(var i = 0; i < i5403.length; i += 1) {
    i5402.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5403[i + 0]) );
  }
  i5400.curves = i5402
  var i5405 = i5401[5]
  var i5404 = []
  for(var i = 0; i < i5405.length; i += 1) {
    i5404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5405[i + 0]) );
  }
  i5400.events = i5404
  i5400.halfPrecision = !!i5401[6]
  return i5400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5409 = data
  i5408.path = i5409[0]
  i5408.componentType = i5409[1]
  i5408.property = i5409[2]
  i5408.keys = i5409[3]
  var i5411 = i5409[4]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 1) {
    i5410.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5411[i + 0]) );
  }
  i5408.objectReferenceKeys = i5410
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5415 = data
  i5414.time = i5415[0]
  request.r(i5415[1], i5415[2], 0, i5414, 'value')
  return i5414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5419 = data
  i5418.functionName = i5419[0]
  i5418.floatParameter = i5419[1]
  i5418.intParameter = i5419[2]
  i5418.stringParameter = i5419[3]
  request.r(i5419[4], i5419[5], 0, i5418, 'objectReferenceParameter')
  i5418.time = i5419[6]
  return i5418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5421 = data
  i5420.name = i5421[0]
  i5420.ascent = i5421[1]
  i5420.originalLineHeight = i5421[2]
  i5420.fontSize = i5421[3]
  var i5423 = i5421[4]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 1) {
    i5422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5423[i + 0]) );
  }
  i5420.characterInfo = i5422
  request.r(i5421[5], i5421[6], 0, i5420, 'texture')
  i5420.originalFontSize = i5421[7]
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5427 = data
  i5426.index = i5427[0]
  i5426.advance = i5427[1]
  i5426.bearing = i5427[2]
  i5426.glyphWidth = i5427[3]
  i5426.glyphHeight = i5427[4]
  i5426.minX = i5427[5]
  i5426.maxX = i5427[6]
  i5426.minY = i5427[7]
  i5426.maxY = i5427[8]
  i5426.uvBottomLeftX = i5427[9]
  i5426.uvBottomLeftY = i5427[10]
  i5426.uvBottomRightX = i5427[11]
  i5426.uvBottomRightY = i5427[12]
  i5426.uvTopLeftX = i5427[13]
  i5426.uvTopLeftY = i5427[14]
  i5426.uvTopRightX = i5427[15]
  i5426.uvTopRightY = i5427[16]
  return i5426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5429 = data
  i5428.name = i5429[0]
  var i5431 = i5429[1]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5431[i + 0]) );
  }
  i5428.states = i5430
  var i5433 = i5429[2]
  var i5432 = []
  for(var i = 0; i < i5433.length; i += 1) {
    i5432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5433[i + 0]) );
  }
  i5428.layers = i5432
  var i5435 = i5429[3]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 1) {
    i5434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5435[i + 0]) );
  }
  i5428.parameters = i5434
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5439 = data
  i5438.cycleOffset = i5439[0]
  i5438.cycleOffsetParameter = i5439[1]
  i5438.cycleOffsetParameterActive = !!i5439[2]
  i5438.mirror = !!i5439[3]
  i5438.mirrorParameter = i5439[4]
  i5438.mirrorParameterActive = !!i5439[5]
  i5438.motionId = i5439[6]
  i5438.nameHash = i5439[7]
  i5438.fullPathHash = i5439[8]
  i5438.speed = i5439[9]
  i5438.speedParameter = i5439[10]
  i5438.speedParameterActive = !!i5439[11]
  i5438.tag = i5439[12]
  i5438.name = i5439[13]
  i5438.writeDefaultValues = !!i5439[14]
  var i5441 = i5439[15]
  var i5440 = []
  for(var i = 0; i < i5441.length; i += 1) {
    i5440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5441[i + 0]) );
  }
  i5438.transitions = i5440
  var i5443 = i5439[16]
  var i5442 = []
  for(var i = 0; i < i5443.length; i += 2) {
  request.r(i5443[i + 0], i5443[i + 1], 2, i5442, '')
  }
  i5438.behaviours = i5442
  return i5438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5447 = data
  i5446.fullPath = i5447[0]
  i5446.canTransitionToSelf = !!i5447[1]
  i5446.duration = i5447[2]
  i5446.exitTime = i5447[3]
  i5446.hasExitTime = !!i5447[4]
  i5446.hasFixedDuration = !!i5447[5]
  i5446.interruptionSource = i5447[6]
  i5446.offset = i5447[7]
  i5446.orderedInterruption = !!i5447[8]
  i5446.destinationStateNameHash = i5447[9]
  i5446.destinationStateMachineId = i5447[10]
  i5446.isExit = !!i5447[11]
  i5446.mute = !!i5447[12]
  i5446.solo = !!i5447[13]
  var i5449 = i5447[14]
  var i5448 = []
  for(var i = 0; i < i5449.length; i += 1) {
    i5448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5449[i + 0]) );
  }
  i5446.conditions = i5448
  return i5446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5455 = data
  i5454.mode = i5455[0]
  i5454.parameter = i5455[1]
  i5454.threshold = i5455[2]
  return i5454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5459 = data
  i5458.blendingMode = i5459[0]
  i5458.defaultWeight = i5459[1]
  i5458.name = i5459[2]
  i5458.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5459[3], i5458.stateMachine)
  return i5458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5461 = data
  i5460.id = i5461[0]
  i5460.defaultStateNameHash = i5461[1]
  var i5463 = i5461[2]
  var i5462 = []
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5463[i + 0]) );
  }
  i5460.entryTransitions = i5462
  var i5465 = i5461[3]
  var i5464 = []
  for(var i = 0; i < i5465.length; i += 1) {
    i5464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5465[i + 0]) );
  }
  i5460.anyStateTransitions = i5464
  return i5460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5469 = data
  i5468.destinationStateNameHash = i5469[0]
  i5468.destinationStateMachineId = i5469[1]
  i5468.isExit = !!i5469[2]
  i5468.mute = !!i5469[3]
  i5468.solo = !!i5469[4]
  var i5471 = i5469[5]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5471[i + 0]) );
  }
  i5468.conditions = i5470
  return i5468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5475 = data
  i5474.defaultBool = !!i5475[0]
  i5474.defaultFloat = i5475[1]
  i5474.defaultInt = i5475[2]
  i5474.name = i5475[3]
  i5474.nameHash = i5475[4]
  i5474.type = i5475[5]
  return i5474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5477 = data
  var i5479 = i5477[0]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5479[i + 0]) );
  }
  i5476.files = i5478
  i5476.componentToPrefabIds = i5477[1]
  return i5476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5483 = data
  i5482.path = i5483[0]
  request.r(i5483[1], i5483[2], 0, i5482, 'unityObject')
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5485 = data
  var i5487 = i5485[0]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 1) {
    i5486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5487[i + 0]) );
  }
  i5484.scriptsExecutionOrder = i5486
  var i5489 = i5485[1]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 1) {
    i5488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5489[i + 0]) );
  }
  i5484.sortingLayers = i5488
  var i5491 = i5485[2]
  var i5490 = []
  for(var i = 0; i < i5491.length; i += 1) {
    i5490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5491[i + 0]) );
  }
  i5484.cullingLayers = i5490
  i5484.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5485[3], i5484.timeSettings)
  i5484.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5485[4], i5484.physicsSettings)
  i5484.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5485[5], i5484.physics2DSettings)
  i5484.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5485[6], i5484.qualitySettings)
  i5484.removeShadows = !!i5485[7]
  i5484.autoInstantiatePrefabs = !!i5485[8]
  i5484.enableAutoInstancing = !!i5485[9]
  i5484.lightmapEncodingQuality = i5485[10]
  i5484.desiredColorSpace = i5485[11]
  return i5484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5495 = data
  i5494.name = i5495[0]
  i5494.value = i5495[1]
  return i5494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5499 = data
  i5498.id = i5499[0]
  i5498.name = i5499[1]
  i5498.value = i5499[2]
  return i5498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5503 = data
  i5502.id = i5503[0]
  i5502.name = i5503[1]
  return i5502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5505 = data
  i5504.fixedDeltaTime = i5505[0]
  i5504.maximumDeltaTime = i5505[1]
  i5504.timeScale = i5505[2]
  i5504.maximumParticleTimestep = i5505[3]
  return i5504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5507 = data
  i5506.gravity = new pc.Vec3( i5507[0], i5507[1], i5507[2] )
  i5506.defaultSolverIterations = i5507[3]
  i5506.bounceThreshold = i5507[4]
  i5506.autoSyncTransforms = !!i5507[5]
  i5506.autoSimulation = !!i5507[6]
  var i5509 = i5507[7]
  var i5508 = []
  for(var i = 0; i < i5509.length; i += 1) {
    i5508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5509[i + 0]) );
  }
  i5506.collisionMatrix = i5508
  return i5506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5513 = data
  i5512.enabled = !!i5513[0]
  i5512.layerId = i5513[1]
  i5512.otherLayerId = i5513[2]
  return i5512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5515 = data
  request.r(i5515[0], i5515[1], 0, i5514, 'material')
  i5514.gravity = new pc.Vec2( i5515[2], i5515[3] )
  i5514.positionIterations = i5515[4]
  i5514.velocityIterations = i5515[5]
  i5514.velocityThreshold = i5515[6]
  i5514.maxLinearCorrection = i5515[7]
  i5514.maxAngularCorrection = i5515[8]
  i5514.maxTranslationSpeed = i5515[9]
  i5514.maxRotationSpeed = i5515[10]
  i5514.timeToSleep = i5515[11]
  i5514.linearSleepTolerance = i5515[12]
  i5514.angularSleepTolerance = i5515[13]
  i5514.defaultContactOffset = i5515[14]
  i5514.autoSimulation = !!i5515[15]
  i5514.queriesHitTriggers = !!i5515[16]
  i5514.queriesStartInColliders = !!i5515[17]
  i5514.callbacksOnDisable = !!i5515[18]
  i5514.reuseCollisionCallbacks = !!i5515[19]
  i5514.autoSyncTransforms = !!i5515[20]
  var i5517 = i5515[21]
  var i5516 = []
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5517[i + 0]) );
  }
  i5514.collisionMatrix = i5516
  return i5514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5521 = data
  i5520.enabled = !!i5521[0]
  i5520.layerId = i5521[1]
  i5520.otherLayerId = i5521[2]
  return i5520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5523 = data
  var i5525 = i5523[0]
  var i5524 = []
  for(var i = 0; i < i5525.length; i += 1) {
    i5524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5525[i + 0]) );
  }
  i5522.qualityLevels = i5524
  var i5527 = i5523[1]
  var i5526 = []
  for(var i = 0; i < i5527.length; i += 1) {
    i5526.push( i5527[i + 0] );
  }
  i5522.names = i5526
  i5522.shadows = i5523[2]
  i5522.anisotropicFiltering = i5523[3]
  i5522.antiAliasing = i5523[4]
  i5522.lodBias = i5523[5]
  i5522.shadowCascades = i5523[6]
  i5522.shadowDistance = i5523[7]
  i5522.shadowmaskMode = i5523[8]
  i5522.shadowProjection = i5523[9]
  i5522.shadowResolution = i5523[10]
  i5522.softParticles = !!i5523[11]
  i5522.softVegetation = !!i5523[12]
  i5522.activeColorSpace = i5523[13]
  i5522.desiredColorSpace = i5523[14]
  i5522.masterTextureLimit = i5523[15]
  i5522.maxQueuedFrames = i5523[16]
  i5522.particleRaycastBudget = i5523[17]
  i5522.pixelLightCount = i5523[18]
  i5522.realtimeReflectionProbes = !!i5523[19]
  i5522.shadowCascade2Split = i5523[20]
  i5522.shadowCascade4Split = new pc.Vec3( i5523[21], i5523[22], i5523[23] )
  i5522.streamingMipmapsActive = !!i5523[24]
  i5522.vSyncCount = i5523[25]
  i5522.asyncUploadBufferSize = i5523[26]
  i5522.asyncUploadTimeSlice = i5523[27]
  i5522.billboardsFaceCameraPosition = !!i5523[28]
  i5522.shadowNearPlaneOffset = i5523[29]
  i5522.streamingMipmapsMemoryBudget = i5523[30]
  i5522.maximumLODLevel = i5523[31]
  i5522.streamingMipmapsAddAllCameras = !!i5523[32]
  i5522.streamingMipmapsMaxLevelReduction = i5523[33]
  i5522.streamingMipmapsRenderersPerFrame = i5523[34]
  i5522.resolutionScalingFixedDPIFactor = i5523[35]
  i5522.streamingMipmapsMaxFileIORequests = i5523[36]
  return i5522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5533 = data
  i5532.weight = i5533[0]
  i5532.vertices = i5533[1]
  i5532.normals = i5533[2]
  i5532.tangents = i5533[3]
  return i5532
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5534 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5535 = data
  i5534.xPlacement = i5535[0]
  i5534.yPlacement = i5535[1]
  i5534.xAdvance = i5535[2]
  i5534.yAdvance = i5535[3]
  return i5534
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5536 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5537 = data
  i5536.m_GlyphIndex = i5537[0]
  i5536.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5537[1], i5536.m_GlyphValueRecord)
  return i5536
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5538 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5539 = data
  i5538.m_XPlacement = i5539[0]
  i5538.m_YPlacement = i5539[1]
  i5538.m_XAdvance = i5539[2]
  i5538.m_YAdvance = i5539[3]
  return i5538
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2,"unityFallbackShader":3,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16,"readDepth":17},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[2],"56":[14],"57":[14],"58":[14],"59":[14],"60":[14],"61":[14],"62":[14],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[2],"78":[7],"79":[80],"81":[80],"26":[25],"82":[25],"83":[30,25],"84":[7],"85":[30,25],"86":[25],"87":[7,25],"31":[25,30],"88":[25],"89":[25],"90":[25],"29":[26],"33":[30,25],"91":[25],"28":[26],"92":[25],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[25],"99":[25],"100":[25],"101":[30,25],"102":[25],"103":[25],"104":[25],"105":[25],"37":[30,25],"36":[25],"106":[41],"107":[41],"42":[41],"108":[41],"109":[2],"110":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","Ball","UnityEngine.AudioClip","UnityEngine.Rigidbody","UnityEngine.AudioSource","GameManager","UnityEngine.ParticleSystem","Settings","UnityEngine.ParticleSystemRenderer","Pot","UnityEngine.GameObject","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.UI.Toggle","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Texture2D","SceneLoader","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","UnityEditor.Audio.AudioMixerController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.1f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.SortIt3DGameplay";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

