package com.appinop.unity

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.unity3d.player.UnityPlayerActivity

class UnityModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UnityModule" // 👈 MUST MATCH JS NAME
    }

    @ReactMethod
    fun startUnity() {
        val intent = Intent(reactContext, UnityPlayerActivity::class.java)
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        reactContext.startActivity(intent)
    }
}
