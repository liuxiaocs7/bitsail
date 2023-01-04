import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as a,d as c,w as i,e as p,r as l}from"./app.e0c1797c.js";const r={},d=n("h1",{id:"bitsail-component-clients",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bitsail-component-clients","aria-hidden":"true"},"#"),a(" bitsail-component-clients")],-1),u=n("hr",null,null,-1),k=p(`<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><p>In the process of application development, applications often need to connect and interact with various components, such as Kafka, rds, <i>etc.</i>. This module is used to provide clients that connect to various big data components. Developers can easily create clients by introducing corresponding dependencies.</p><p>Currently, this module provides the following clients:</p><table><thead><tr><th>Name</th><th>Component</th><th>Function</th><th>Link</th></tr></thead><tbody><tr><td><code>bitsail-components-client-kafka</code></td><td><code>Kafka</code></td><td>Create KafkaProducer</td><td><a href="#jump_kafka">link</a></td></tr></tbody></table><hr><h2 id="bitsail-components-client-kafka" tabindex="-1"><a class="header-anchor" href="#bitsail-components-client-kafka" aria-hidden="true">#</a> <span id="jump_kafka">bitsail-components-client-kafka</span></h2><h3 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-component-client-kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><p>This module is based on <code>org.apache.kafka.clients.producer.KafkaProducer</code> to providing a wrapped KafkaProducer that supports connecting to a specified kafka cluster and sending data to a specified topic in a synchronous or asynchronous manner.</p><h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h4><p>The constructor accepts the following parameters:</p><ol><li><code>bootstrap.servers</code>: The address to connect to the kafka cluster</li><li><code>topic</code>: kafka topic</li><li><code>userConfigs</code>(optional): User-defined producer build properties</li></ol><p>This constructor supports the following default properties (Refer to <code>org.apache.kafka.clients.producer.ProducerConfig</code> for detailed property definitions):</p><ol><li><code>acks</code>: all</li><li><code>retries</code>: 0</li><li><code>batch_size</code>: 16384</li><li><code>linger.ms</code>: 1000</li><li><code>buffer.memory</code>: 33554432</li><li><code>key.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li><li><code>value.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li></ol><p>The usage example is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String bootstrapAddr = &quot;localhost:9092&quot;;
String topic = &quot;testTopic&quot;;
Map&lt;String, String&gt; userConfigs = ImmutableMap.of(
  &quot;group.id&quot;, &quot;test_group&quot;,
  &quot;batch.size&quot;, 16384
);
KafkaProducer kafkaProducer = new KafkaProducer(bootstrapAddr, topic, userConfigs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="synchronous-asynchronous-send" tabindex="-1"><a class="header-anchor" href="#synchronous-asynchronous-send" aria-hidden="true">#</a> Synchronous/Asynchronous send</h4><p>Developers can use synchronous send, or pass in a callback method to use asynchronous send. The send methods are as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Sync
public Future&lt;RecordMetadata&gt; send(String value);
public Future&lt;RecordMetadata&gt; send(String value, int partitionId);
public Future&lt;RecordMetadata&gt; send(String key, String value);

// Async
public Future&lt;RecordMetadata&gt; send(String value, Callback callback);
public Future&lt;RecordMetadata&gt; send(String value, int partitionId, Callback callback);
public Future&lt;RecordMetadata&gt; send(String key, String value, Callback callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4><p>The following is a complete and runnable sample code using this KafkaProducer to send 300 pieces of specified data to a topic. You can test the run locally after substituting the relevant kafka cluster parameters.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>bytedance<span class="token punctuation">.</span>bitsail<span class="token punctuation">.</span>component<span class="token punctuation">.</span>client<span class="token punctuation">.</span>kafka</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaProducerExample</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span> args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> bootstrapServer <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> topic <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">KafkaProducer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaProducer</span><span class="token punctuation">(</span>bootstrapServer<span class="token punctuation">,</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;key_&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token string">&quot;value_&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function v(m,h){const s=l("RouterLink");return t(),o("div",null,[d,u,n("p",null,[a("Parent document: "),c(s,{to:"/en/documents/components/"},{default:i(()=>[a("bitsail-components")]),_:1})]),k])}const f=e(r,[["render",v],["__file","introduction.html.vue"]]);export{f as default};
