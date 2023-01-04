import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as e,b as t,d as a,w as s,e as r,r as o}from"./app.e0c1797c.js";const c={},f=e("h1",{id:"elasticsearch-连接器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#elasticsearch-连接器","aria-hidden":"true"},"#"),t(" Elasticsearch 连接器")],-1),h=r(`<h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><p>Elasticsearch连接器可用于流、批场景，提供<code>At-Least-Once</code>语义地写入elasticsearch 地能力，并提供灵活地写入请求构建。</p><h2 id="支持的版本信息" tabindex="-1"><a class="header-anchor" href="#支持的版本信息" aria-hidden="true">#</a> 支持的版本信息</h2><ul><li>支持Elasticsearch 7.X</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><p>Elasticsearch连接器支持基本的字段类型:</p><ul><li>字符串类型: <ul><li>string</li><li>text</li><li>keyword</li></ul></li><li>整数类型: <ul><li>long</li><li>integer</li><li>short</li><li>byte</li></ul></li><li>浮点类型: <ul><li>double</li><li>float</li><li>half_float</li><li>scaled_float</li></ul></li><li>布尔类型 <ul><li>boolean</li></ul></li><li>二进制类型 <ul><li>binary</li></ul></li><li>日期类型 <ul><li>date</li></ul></li></ul><h2 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h2><p>用户可通过在任务配置文件的 <code>job.writer</code> 块中添加如下参数。</p><h3 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Elasticsearch连接器类名，只能为<code>com.bytedance.bitsail.connector.elasticsearch.sink.ElasticsearchSink</code></td></tr><tr><td style="text-align:left;">es_hosts</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">Elasticsearch集群接受restful请求的地址列表</td></tr><tr><td style="text-align:left;">es_index</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">要写入的elasticsearch索引</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">数据字段名称及类型</td></tr></tbody></table><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><h4 id="通用可选参数" tabindex="-1"><a class="header-anchor" href="#通用可选参数" aria-hidden="true">#</a> 通用可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;"></td><td style="text-align:left;"></td><td style="text-align:left;">写并发数</td></tr></tbody></table><h4 id="restful请求参数" tabindex="-1"><a class="header-anchor" href="#restful请求参数" aria-hidden="true">#</a> Restful请求参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">request_path_prefix</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">http客户端发起请求时使用的路径前缀</td></tr><tr><td style="text-align:left;">connection_request_timeout_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">http连接管理器请求连接时使用的超时时间（毫秒）</td></tr><tr><td style="text-align:left;">connection_timeout_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">http连接建立超时时间（毫秒）</td></tr><tr><td style="text-align:left;">socket_timeout_ms</td><td style="text-align:left;">60000</td><td style="text-align:left;"></td><td style="text-align:left;">http连接的套接字超时时间（毫秒）</td></tr></tbody></table><h4 id="bulk操作参数" tabindex="-1"><a class="header-anchor" href="#bulk操作参数" aria-hidden="true">#</a> Bulk操作参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">bulk_flush_max_actions</td><td style="text-align:left;">300</td><td style="text-align:left;"></td><td style="text-align:left;">request数量到达多少时，执行一次bulk操作</td></tr><tr><td style="text-align:left;">bulk_flush_max_size_mb</td><td style="text-align:left;">10</td><td style="text-align:left;"></td><td style="text-align:left;">请求数据大小（单位MB）到达多少时，执行一次bulk操作</td></tr><tr><td style="text-align:left;">bulk_flush_interval_ms</td><td style="text-align:left;">10000</td><td style="text-align:left;"></td><td style="text-align:left;">每隔多久执行一次bulk操作（单位ms）</td></tr><tr><td style="text-align:left;">bulk_backoff_policy</td><td style="text-align:left;">EXPONENTIAL</td><td style="text-align:left;">CONSTANT<br>EXPONENTIAL<br>NONE</td><td style="text-align:left;">bulk操作失败时的重试策略:<br>1. <code>CONSTANT</code>: 固定延迟重试<br>2. <code>EXPONENTAIL</code>: 指数回退重试<br>3. <code>NONE</code>: 不重试</td></tr><tr><td style="text-align:left;">bulk_backoff_delay_ms</td><td style="text-align:left;">100</td><td style="text-align:left;"></td><td style="text-align:left;">bulk操作的失败重试延迟，单位ms</td></tr><tr><td style="text-align:left;">bulk_backoff_max_retry_count</td><td style="text-align:left;">5</td><td style="text-align:left;"></td><td style="text-align:left;">bulk操作的失败最大重试次数</td></tr></tbody></table><h4 id="actionrequest构建参数" tabindex="-1"><a class="header-anchor" href="#actionrequest构建参数" aria-hidden="true">#</a> ActionRequest构建参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数默认值</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">es_operation_type</td><td style="text-align:left;">&quot;index&quot;</td><td style="text-align:left;">&quot;index&quot;<br>&quot;create&quot;<br>&quot;update&quot;<br>&quot;upsert&quot;<br>&quot;delete&quot;</td><td style="text-align:left;">决定创建的ActionRequest类型</td></tr><tr><td style="text-align:left;">es_dynamic_index_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">从源数据的该字段获取这条数据插入的索引名</td></tr><tr><td style="text-align:left;">es_operation_type_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">从源数据的该字段获取这条数据的ActionRequest类型</td></tr><tr><td style="text-align:left;">es_version_field</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">从源数据的该字段获取这条数据的版本信息</td></tr><tr><td style="text-align:left;">es_id_fields</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;"></td><td style="text-align:left;">从源数据的该字段获取文档id。格式为 <code>&#39;,&#39;</code> 分隔的下标字符串，例如: <code>&quot;1,2&quot;</code></td></tr><tr><td style="text-align:left;">doc_exclude_fields</td><td style="text-align:left;">&quot;&quot;</td><td style="text-align:left;"></td><td style="text-align:left;">在创建文档时，忽略这些下标所在的字段。格式为 <code>&#39;,&#39;</code> 分隔的下标字符串，例如: <code>&quot;1,2&quot;</code></td></tr><tr><td style="text-align:left;">ignore_blank_value</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">在创建文档时，是否忽略源数据中的值为空的字段</td></tr><tr><td style="text-align:left;">flatten_map</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">在创建文档时，是否将数据源中的Map类型数据展开放入文档</td></tr><tr><td style="text-align:left;">id_delimiter</td><td style="text-align:left;"><code>#</code></td><td style="text-align:left;"></td><td style="text-align:left;">在将多个字段合并成一个文档id时使用的分隔符</td></tr><tr><td style="text-align:left;">json_serializer_features</td><td style="text-align:left;">-</td><td style="text-align:left;"></td><td style="text-align:left;">在构建json字符串时使用的Json特性。格式为 <code>&#39;,&#39;</code> 分隔的字符串，例如: <code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,23);function g(x,u){const l=o("RouterLink");return d(),i("div",null,[f,e("p",null,[t("上级文档："),a(l,{to:"/zh/documents/connectors/"},{default:s(()=>[t("连接器")]),_:1})]),h,e("p",null,[t("配置示例文档："),a(l,{to:"/zh/documents/connectors/elasticsearch/elasticsearch-example.html"},{default:s(()=>[t("Elasticsearch 连接器示例")]),_:1})])])}const b=n(c,[["render",g],["__file","elasticsearch.html.vue"]]);export{b as default};
