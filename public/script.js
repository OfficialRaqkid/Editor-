function runCode() {
  const html = document.getElementById('html-code').value;
  const css = `<style>${document.getElementById('css-code').value}</style>`;
  const js = `<script>${document.getElementById('js-code').value}<\/script>`;
  const output = document.getElementById('output');

  output.srcdoc = html + css + js;
}
