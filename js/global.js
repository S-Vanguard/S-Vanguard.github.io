/************************* Aside Component ********************************/
Vue.component('my-aside', {
    data: function() {
        return {
            intro: 'A simple description of S-Vanguard & repository. A simple description of S-Vanguard & repository',
            copyright: 'Copyright © 2018 S-Vanguard. All rights reserved.',
        };
    },
    methods: {
        toGithub: function() {
            window.location.href = 'https://github.com/S-Vanguard';
        },
        toEmail: function() {
            document.getElementById('email').scrollIntoView(true);
            return false;
        },
        toGroup: function() {
            document.getElementById('group').scrollIntoView(true);
            return false;
        },
    },
    template: '\
    <el-aside width="400px">\
        <div>\
            <img class="logo" src="./assets/img/logo.png">\
            <span>S-Vanguard</span>\
            <span class="intro">{{ intro }}</span>\
            <div class="icons">\
                <el-row :gutter="40" type="flex" justify="center">\
                    <el-col>\
                        <i class="iconfont icon-github" @click="toGithub"></i>\
                    </el-col>\
                    <el-col>\
                        <i class="iconfont icon-mail" @click="toEmail"></i>\
                    </el-col>\
                    <el-col>\
                        <i class="iconfont icon-group" @click="toGroup"></i>\
                    </el-col>\
                </el-row>\
            </div>\
            <div class="footer">{{ copyright }}</div>\
        </div>\
    </el-aside>'
});

/************************* Dependency Component ********************************/
Vue.component('my-dependency', {
    data: function() {
        return {
            fronts: [{
                'name' : 'Vue',
                'url' : "https://github.com/vuejs/vue",
            },{ 
                'name': 'Element-ui',
                'url' : "https://github.com/ElemeFE/element",
            },{
                'name': 'Axios',
                'url' : "https://github.com/axios/axios",
            }],
            backs: [{
                'name': 'Go',
                'url': 'https://github.com/golang/go',
            },{
                'name': 'BoltDB',
                'url': 'https://github.com/boltdb/bolt',
            }],
        };
    },
    methods: {},
    template: '\
    <div>\
        <h3>Front-End\
            <div>\
                <ul>\
                    <li v-for="item in fronts">\
                        <a :href="[ item.url ]">{{ item.name }}</a>\
                    </li>\
                </ul>\
            </div>\
        </h3>\
        <h3>Back-End\
            <div>\
                <ul>\
                    <li v-for="item in backs">\
                        <a :href="[ item.url ]">{{ item.name }}</a>\
                    </li>\
                </ul>\
            </div>\
        </h3>\
    </div>'
});

/************************* Member Component ********************************/
Vue.component('my-member', {
    data: function() {
        return {
            members: [{
                name: 'gitgiter',
                avatar: 'https://avatars3.githubusercontent.com/u/31855605?s=96&v=4',
            }, {
                name: 'MrFive555',
                avatar: 'https://avatars1.githubusercontent.com/u/29187436?s=96&v=4',
            }, {
                name: 'SiskonEmilia',
                avatar: 'https://avatars0.githubusercontent.com/u/25914870?s=96&v=4',
            }, {
                name: 'sysuxwh',
                avatar: 'https://avatars1.githubusercontent.com/u/29174401?s=96&v=4',
            }, {
                name: 'Xiongzj5',
                avatar: 'https://avatars2.githubusercontent.com/u/25432901?s=96&v=4',
            }, {
                name: 'xwy27',
                avatar: 'https://avatars3.githubusercontent.com/u/27471274?s=96&v=4',
            }],
        };
    },
    methods: {
        toMember: function(ele) {
            let node = ele.toElement;
            if (node.nodeName != 'DIV') {
                node = node.parentElement;
            }
            window.location.href = "https://github.com/" + node.children[1].innerHTML;;
        }
    },
    template: '\
    <h3 id="group">Members\
        <div>\
            <el-row :gutter="12">\
                <el-col :span="3" @click.native="toMember"\
                    v-for="member in members">\
                    <img :src="member.avatar">\
                    <p>{{ member.name }}</p>\
                </el-col>\
            </el-row>\
        </div>\
    </h3>'
});