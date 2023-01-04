import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as s,b as n,d as p,w as r,e as i,r as c}from"./app.e0c1797c.js";const l={},d=s("h1",{id:"redis-连接器示例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#redis-连接器示例","aria-hidden":"true"},"#"),n(" Redis 连接器示例")],-1),u=i(`<h2 id="redis-写连接器" tabindex="-1"><a class="header-anchor" href="#redis-写连接器" aria-hidden="true">#</a> Redis 写连接器</h2><p>假设在本地起了一个端口为6379的Redis。用于写入该Redis的配置如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;redis_port&quot;</span><span class="token operator">:</span> <span class="token number">6379</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(m,v){const a=c("RouterLink");return t(),o("div",null,[d,s("p",null,[n("父目录："),p(a,{to:"/zh/documents/connectors/redis/redis.html"},{default:r(()=>[n("Redis 连接器")]),_:1})]),u])}const b=e(l,[["render",k],["__file","redis-example.html.vue"]]);export{b as default};
