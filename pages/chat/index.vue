<template>
    <div class="chatBox-fulid container-fulid">
        <div class="markBox" style="height:70px;background:white;"></div>
        <div class="chatBox container">
            <!-- 聊天室盒子 -->
            <div class="chat">
                <!-- 左边列表 -->
                <div class="chat-L">

                </div>
                <!-- 右边区域 -->
                <div class="chat-R">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
.chatBox-fulid{
    border: 1px solid #000;
    height: 100vh;
    .chatBox{
        height: 600px;
        margin-top: 20px;
        border: 1px solid #000;
        padding: 0px 100px;
        .chat{
            border: 1px solid #000;
            height: 100%;
            display: flex;
            flex-direction: row;
            .chat-L{
                border: 1px solid #000;
                flex: 1;
            }
            .chat-R{
                border: 1px solid #000;
                flex: 8;
            }
        }
    }
}
</style>