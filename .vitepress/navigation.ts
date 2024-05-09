import type { DefaultTheme } from 'vitepress/theme'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Materials',
    items: [
      { text: 'Introduction', link: '/materials/introduction' },
      {
        text: 'Semester 1',
        items: [
          { text: 'Programming', link: '/materials/programming/' },
          { text: 'Basic Mathematics', link: '/materials/basicmath/' },
        ],
      },
      { text: 'Semester 2', items: [{ text: 'Analysis', link: '/materials/analysis/' }] },
    ],
  },
  /* { text: 'Posts', link: '/posts/' }, */
  { text: 'Contributors', link: '' },
]

const sidebar: DefaultTheme.Sidebar = {
  '/materials/': [
    {
      text: 'Introduction',
      link: '/materials/introduction',
    },
    {
      text: 'Semester 1',
      collapsed: false,
      items: [
        {
          text: 'Programming [P]',
          collapsed: true,
          items: [
            { text: '[P] General', link: '/materials/programming/' },
            { text: '[P] Algo: Seq -> Single', link: '/materials/programming/single.md' },
            { text: '[P] Algo: Seq -> Seq', link: '/materials/programming/sequence.md' },
            { text: '[P] Algo: Sort and other', link: '/materials/programming/sort.md' },
            { text: '[P] Practical examples', link: '/materials/programming/poa-examples.md' },
            { text: '[P] C2 sample solutions', link: '/materials/programming/c2-examples.md' },
          ],
        },
        {
          text: 'Basic Mathematics [BM]',
          collapsed: true,
          items: [
            { text: '[BM] General', link: '/materials/basicmath/' },
            { text: '[BM] Inverse matrices', link: '/materials/basicmath/inverse-mx.md' },
            {
              text: '[BM] Inverse matrices Gauss-Jordan method',
              link: '/materials/basicmath/inverse-mx-gj.md',
            },
            { text: '[BM] Eigenvalues and eigenvectors', link: '/materials/basicmath/eigen.md' },
            { text: '[BM] Diagonalization', link: '/materials/basicmath/diagonalization.md' },
            {
              text: '[BM] Orthogonal and orthonormal basis',
              link: '/materials/basicmath/ortho.md',
            },
            { text: '[BM] Inverse functions', link: '/materials/basicmath/inverse-fn.md' },
            { text: '[BM] Proving limits', link: '/materials/basicmath/limits.md' },
          ],
        },
      ],
    },
    {
      text: 'Semester 2',
      collapsed: false,
      items: [
        {
          text: 'Analysis I [A-1]',
          collapsed: true,
          items: [
            { text: '[A-1] General', link: '/materials/analysis/' },
            { text: '[A-1] Invertable functions', link: '/materials/analysis/invertable.md' },
            { text: '[A-1] Function composition', link: '/materials/analysis/composition.md' },
            { text: '[A-1] Bounded sets', link: '/materials/analysis/bounded.md' },
            {
              text: '[A-1] Limits: proving by definition Vol. 1',
              link: '/materials/analysis/limits-def.md',
            },
            {
              text: '[A-1] Limits: evaluating limits Vol. 1',
              link: '/materials/analysis/limits-eval.md',
            },
            {
              text: '[A-1] Limits: recursive sequences',
              link: '/materials/analysis/limits-rs.md',
            },
            { text: '[A-1] Convergence of series', link: '/materials/analysis/series-conv.md' },
            { text: '[A-1] Evaluating sums of series', link: '/materials/analysis/series.md' },
            {
              text: '[A-1] Power series and radius of convergence',
              link: '/materials/analysis/ps-radius.md',
            },
            {
              text: '[A-1] Limits: proving by definition Vol. 2',
              link: '/materials/analysis/limits-def2.md',
            },
            {
              text: '[A-1] Limits: evaluating limits Vol. 2',
              link: '/materials/analysis/limits-eval2.md',
            },
          ],
        },
      ],
    },
  ],
}

export { nav, sidebar }
