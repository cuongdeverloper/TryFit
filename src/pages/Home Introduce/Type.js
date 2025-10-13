import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ứng dụng thử đồ ảo bằng AI",
          "Ghép ảnh người với áo, quần, phụ kiện",
          "Bán công nghệ và giải pháp thực tế ảo",
          "Trải nghiệm mua sắm thời trang thông minh"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
