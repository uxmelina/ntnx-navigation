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

const beam =[
  { title:'Cost Governance',
    level2: ['Dashboard','Analyse','Save','RIa', 'Chargeback', 'Budget','History', 'Reports']
  },
  { title:'Security Compliance',
    level2: ['Dashboard','Compliance Remediation','Inventory','History', 'Reports']
  }
]

const frame = [
  { title:'Systems',
    level2: ['Sandbox','TestUX','Licensing Server','File Server'],
  },
  { single: 'Launchpads' },
  { single: 'Capacity' },
  { title:'Analytics',
    level2: ['Sessions','Usage','Disk Usage','Elasticity'],
  },
  { single: 'Activity' },
  { separator: ''},
  { single: 'Settings' },
  { single: 'Status' }
]


function flyer(page){
  page.map(a =>{
    $('aside').append(`
      ${a.title ? `
      <div class="nav-item" hcd>
        <a>${a.title}</a>${arrow}
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
}
