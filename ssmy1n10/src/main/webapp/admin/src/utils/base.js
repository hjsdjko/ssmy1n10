const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmy1n10/",
            name: "ssmy1n10",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmy1n10/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的电影院订票选座系统"
        } 
    }
}
export default base
