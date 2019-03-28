const pc = [
  { single: 'Dashboard'},
  { title:'Virtual Infrastructure',
    level2:['VMs','Storage Containers','Catalog Items','Images','Categories','Recoverable Entitites'],
  },
  { title:'Policies',
    level2:['Security Policites','Protection Policies','Recovery Plans ','NGT Policies'],
  },
  { separator: ''}
]



pc.map(a =>{
  $('aside').append(`
    ${a.title ? `
    <div class="nav-item" hcd>
      <a>${a.title}</a>
      <div class="nav-secondary-menu">
        ${a.level2.map(
        b => `<div class="nav-item" hcd> <a>${b}</a></div>`).join('')}
      </div>
    </div>` :
    a.single ?
    `<div class="nav-item" hcd>
      <a>${a.single}</a>
    </div>` : `<hr></hr>`
  }`)
})



```
  { single: 'Dashboard' },
  { title : 'Virtual Infrastructure',
    level2: ['a','b','c','d'],
  },
  { title:'Policies',
    level2: ['a','b','c','d'],
  },
```
