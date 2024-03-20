/*
 * @Description: 
 * @Author: houcw
 * @Date: 2024-03-20 23:31:38
 * @LastEditTime: 2024-03-20 23:31:50
 * @LastEditors: houcw
 * @Reference: 
 */
fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container"></div>'
      ),
      $("body").append(
        '<script src="/styles/fish-base.js"></script>'
      ),
      this
    );
  }