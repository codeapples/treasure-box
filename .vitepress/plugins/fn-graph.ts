import MarkdownIt from 'markdown-it'

export default (md: MarkdownIt) => {
  const defaultFence =
    md.renderer.rules.fence ||
    ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const info = token.info.trim()

    if (info !== 'graph') {
      return defaultFence(tokens, idx, options, env, self)
    }

    try {
      const graphData = JSON.parse(token.content)

      // Return the Vue component with the data
      return `<FunctionGraph :data='${JSON.stringify(graphData)}' />`
    } catch (error) {
      return `<pre><code class="language-graph">Invalid graph data</code></pre>`
    }
  }
}
