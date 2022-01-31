// 声明 CSS 文件。讲过声明后才可以被TS识别
declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}
