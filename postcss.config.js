module.exports = {
    plugins: [
      require('postcss-nesting'), // 중첩 플러그인 추가
      require('tailwindcss'),
      require('autoprefixer'),
      // 다른 PostCSS 플러그인이 있다면 여기에 추가하세요
    ]
  }