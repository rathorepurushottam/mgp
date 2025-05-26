package com.mgp
import com.unity3d.player.UnityPlayerActivity

object UnityBridge {
    @JvmStatic
    fun goBackToReactNative() {
        val activity = UnityPlayerActivity.currentActivity
        activity?.finish()
    }
}