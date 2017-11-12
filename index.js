
import { NativeModules, AccessibilityInfo, findNodeHandle, Platform, UIManager } from 'react-native';

const { RNAccessibility } = NativeModules;

const announceForAccessibility = Platform.OS === 'android' ? RNAccessibility.announce : AccessibilityInfo.announceForAccessibility;


module.exports = {
    announceForAccessibility,
    focusOnView(ref) {
        const reactTag = findNodeHandle(ref)
        Platform.OS === 'android' ? UIManager.sendAccessibilityEvent(
            reactTag,
            8
        ) : AccessibilityInfo.setAccessibilityFocus(reactTag)
    }
}