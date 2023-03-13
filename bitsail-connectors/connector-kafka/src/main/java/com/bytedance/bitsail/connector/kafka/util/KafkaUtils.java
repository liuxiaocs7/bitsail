/*
 * Copyright 2022-2023 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.connector.kafka.util;

import com.bytedance.bitsail.common.configuration.BitSailConfiguration;
import com.bytedance.bitsail.connector.kafka.option.KafkaSourceOptions;

import org.apache.kafka.clients.admin.AdminClient;
import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.consumer.Consumer;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;

import java.util.Collections;
import java.util.List;
import java.util.Properties;

public class KafkaUtils {

  public static AdminClient prepareKafkaAdminClient(BitSailConfiguration kafkaConfiguration, Properties properties) {

    String bootstrapServers = kafkaConfiguration.get(KafkaSourceOptions.BOOTSTRAP_SERVERS);
    String clientIdPrefix = kafkaConfiguration.get(KafkaSourceOptions.CLIENT_ID_PREFIX);

    Properties props = new Properties();
    props.putAll(properties);
    props.setProperty(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
    props.setProperty(ConsumerConfig.CLIENT_ID_CONFIG, clientIdPrefix);

    return AdminClient.create(props);
  }

  public static Consumer<String, String> prepareKafkaConsumer(BitSailConfiguration kafkaConfiguration,
                                                              Properties properties) {
    String bootstrapServers = kafkaConfiguration.get(KafkaSourceOptions.BOOTSTRAP_SERVERS);
    String topic = kafkaConfiguration.get(KafkaSourceOptions.TOPIC);
    String consumerGroup = kafkaConfiguration.get(KafkaSourceOptions.CONSUMER_GROUP);

    Properties props = new Properties();
    props.putAll(properties);
    props.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
    props.setProperty(ConsumerConfig.GROUP_ID_CONFIG, consumerGroup);
    props.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
    props.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());

    Consumer<String, String> kafkaConsumer = new KafkaConsumer<>(props);

    List<String> topics = Collections.singletonList(topic);
    kafkaConsumer.subscribe(topics);

    return kafkaConsumer;
  }
}