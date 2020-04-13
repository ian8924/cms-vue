export default [
  // user login
  {
    url: '/callcarbar/edm/getlist',
    type: 'post',
    response: config => {
      return {
        data: [
          {
            id: 17,
            campaignID: 'testedm1',
            name: '測試活動1',
            description: 'FE 測試活動1'
          },
          {
            id: 18,
            campaignID: 'oldcampaigntest',
            name: '舊活動EDM測試',
            description: '測試以前發過的所有 EDM 是否都正常'
          },
          {
            id: 19,
            campaignID: 'GG',
            name: '衝一波',
            description: 'ID 不能中文自己看文件'
          },
          {
            id: 20,
            campaignID: '202001newyearpromo',
            name: '2020 新年促銷',
            description:
              '2020/01/24 前，使用「我要喝咖啡」序號預約單趟可獲得機場咖啡兌換券 2 張、使用「我要貴賓室」序號預約來回趟可免費使用機場貴賓室 1 次。'
          },
          {
            id: 21,
            campaignID: 'nickname_test',
            name: '個人化稱謂 \u0026 寄件人名稱更改測試',
            description: '個人化稱謂 \u0026 寄件人名稱更改測試'
          },
          {
            id: 22,
            campaignID: 'pressure_test',
            name: '內部壓力測試',
            description: '發送 100 份 email 確認，正式環境發送正常'
          }
        ]
      }
    }
  }
]
