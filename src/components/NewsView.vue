<template>
    <div>
        <mt-header fixed title="新闻"></mt-header>
        <div class="container">
            <h1>
                <router-link to="/list/yule">
                    娱乐新闻
                </router-link>
            </h1>

            <h1>
                <router-link to="/list/shehui">
                    社会新闻
                </router-link>
            </h1>
        </div>
    </div>
</template>

<style media="screen">
    .container {
        margin-top: 40px;
    }
</style>
