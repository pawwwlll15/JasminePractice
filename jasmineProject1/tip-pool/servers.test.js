describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('it should not add a new submitServerInfo() with empty input',function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let serverList = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverList.length).toEqual(3);
    expect(serverList[0].textContent).toEqual('Alice');
    expect(serverList[1].textContent).toEqual('$0.00');
   
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    
  });
});

