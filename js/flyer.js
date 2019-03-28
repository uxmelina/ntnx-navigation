const pc = [
  { single: 'Dashboard' },
  { title:'Activity',
    level2: ['Alerts','Events','Tasks'] },
  { title:'Tools',
    level2: ['Analysis','Planning','Reporting'] },
  { title:'Hardware & Resources',
    level2: ['Clusters','Hosts','Disks','Availability Zones'] },
  { title:'Virtual Infrastructure',
    level2: ['VMs','Applications','Containers','Storage Containers','Catalog Items','Images','Virtual Networks','Direct Connections','VPNs','Floating IPs'] },
  { title:'Protection & Security',
    level2: ['Security Policies','Affinity Policies','Alert Policies','Protection Rules','Recovery Plan','Recovery Rules'] },
  { title:'Administration',
    level2: ['Projects','Categories','Roles','Users','Cluster Profiles'] },
  { separator: '' },
  { single: 'Settings' },
  { single: 'Help' },
  { single: ' ' }
]

const beam =[
  { title:'Cost Governance',
    level2: ['Dashboard','Analyse','Save','RIa', 'Chargeback', 'Budget','History', 'Reports']
  },
  { title:'Security Compliance',
    level2: ['Dashboard','Compliance Remediation','Inventory','History', 'Reports']
  },
  { single: ' ' }
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
  { single: 'Status' },
  { single: ' ' }
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
