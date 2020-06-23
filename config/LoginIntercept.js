/** @className - */

/** @author -qqz */

/** @date -2020/6/19 */

/**
 * 跳转
 * @param data
 */
export function navigationTo(data = {}) {
    if (logic) {
        uni.navigateTo({
            url: data.url
        });
    }
}

/**
 * 关闭当前页面，跳转到应用内的某个页面。
 * @param data url
 */
function redirectTo(data = {}) {
    if (logic) {
        uni.redirectTo({
            url: data.url
        });
    }
}

/**
 * 简单处理
 * @returns {boolean} false 未登录  true 已登录
 */
function logic() {
    // 此处提配置
    let userInfo = uni.getStorageInfoSync("userInfo")

    if (!userInfo.isLogin) {
        // 此处提配置
        navigationTo({
            url: '/pages/login'
        })
        return false;
    }
    return true
}
