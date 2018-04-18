# bomao

### 接口统计
1. 登录  '/mobile-h5-auth/login'  post  {username:'', password:''}

2. 用户信息 '/mobileh5-users/user-account-info' get

3. 公告  '/mobileh5-announcements/'  get

4. 首页轮播 '/mobileh5-announcements/banner' get

5. 玩法汇总 '/mobile-lotteries-h5/lottery-info' post  {}  参数待确定

6. 投注记录 '/mobileh5-projects'  get  {
    _token: '',
    page: 1,
    end: '',
    start: '',
    bet_status: 1, 
    lottery_id: ''
  }

7. 账变记录 '/mobileh5-reports/0/getmobileusertransaction/'  get

8. 单个投注记录 '/mobileh5-projects/${id}/view' get  {id:'投注id'}
   
9. 站内信 '/mobileh5-station-letters/' post  {_token: this.share.user.token}

10. 站内信详情  '/mobileh5-station-letters/${id}/view' get id

11. 用户账户信息 '/mobileh5-withdrawals/withdraw'  get  {data: {accounts: {available: 0, withdrawable: 0}, bank_cards: []}} 

12. 用于获取城市列表,银行名称列表  '/mobileh5-bank-cards/1/bind-card'  post {_token: this.share.user.token}

13. 用户申请提现 '/mobileh5-withdrawals/withdraw/1'  post {id: '', account: '', account_name: '', fund_password: '', amount: 2, _token: ''}

14. 充值方式选择 '/mobileh5-recharges/get-alipay-qrcode'  post  {_token: '', deposit_mode: 2, bank_code: '', bank: 0, amount: 10}  支付宝

15. 获取用户绑定的银行卡 '/mobileh5-recharges/netbank' get

16. 游戏玩法汇总 '/mobile-lotteries-h5/load-data/2/$id' 具体游戏玩法

17. 进入游戏获取默认玩法 '/mobile-lotteries-h5/load-data/1/${+this.share.pid}?_=${Math.random()'  post  {_token: this.share.user.token}

18. 修改登录密码 /mobileh5-users/password-management/0 post

19. 修改资金密码 /mobileh5-users/password-management/1 post

### 需增加接口
1. 单个游戏历史开奖记录 (走势图需要)
2. 注册接口
3. 追号记录  追号详情
4. 积分中心(用户积分查询 和记录)
5. 用户彩金卡详情