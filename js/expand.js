
pc.map(a =>{
  $('aside').append(`
    ${a.title ? `
    <details>
      <summary>${a.title}</summary>
      <div class="sum-secondary-menu">
        ${a.level2.map(
        b => `<div class="nav-item" hcd> <a>${b}</a></div>`).join('')}
      </div>
    </details>` :

    a.single ?
    `<div class="nav-item" hcd>
      <a>${a.single}</a>
    </div>` : `<hr></hr>`
  }`)
})
