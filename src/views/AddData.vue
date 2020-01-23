<template>
  <div class="container">
    <h2 class="title">Add New Database</h2>
    <section>
      <b-field label="Name">
        <b-input v-model="database.name"></b-input>
      </b-field>

      <b-field label="Description">
        <textarea class="textarea" v-model="database.description"></textarea>
      </b-field>

      <b-field label="URL">
        <b-input v-model="database.url"></b-input>
      </b-field>
      <b-field label="Use proxy?">
        <b-switch v-model="database.use_proxy"></b-switch>
      </b-field>

      <b-field label="Vendor">
        <b-input v-model="database.vendor"></b-input>
      </b-field>

      <b-field label="Featureable?">
        <b-switch v-model="database.featurable"></b-switch>
      </b-field>

      <b-field label="Content Types">
        <ul v-if="contentTypesController.length > 0">
          <li
            style="display:inline"
            v-for="(item, index) in contentTypesController"
            :key="index"
          >
            <button
              class="button lil-space-here"
              :class="{
                'is-success': item.selected,
                'is-text': !item.selected
              }"
              @click="item.selected = !item.selected"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </b-field>

      <b-field label="Excellent For">
        <ul class="ml-1 mt-1" v-if="topicsExcellentForEnhanced.length > 0">
          <li v-for="(item, index) in topicsExcellentForEnhanced" :key="index">
            <span class="sub-label">{{ item.name }}</span>
            <br />
            <button
              :class="{ 'is-success': i.selected, 'is-text': !i.selected }"
              class="button lil-space-here"
              @click="i.selected = !i.selected"
              v-for="(i, idex) in item.subtopics"
              :key="idex"
            >
              {{ i.name }}
            </button>
          </li>
        </ul>
      </b-field>
      <b-field label="Good For">
        <ul class="ml-1 mt-1" v-if="topicsGoodForEnhanced.length > 0">
          <li v-for="(item, index) in topicsGoodForEnhanced" :key="index">
            <span class="sub-label">{{ item.name }}</span>
            <br />
            <button
              :class="{ 'is-success': i.selected, 'is-text': !i.selected }"
              class="button lil-space-here"
              @click="i.selected = !i.selected"
              v-for="(i, idex) in item.subtopics"
              :key="idex"
            >
              {{ i.name }}
            </button>
          </li>
        </ul>
      </b-field>
      <div class="form-buttons">
        <button @click="goHome" class="button is-danger">
          <span class="mdi mdi-cancel"></span> Cancel
        </button>
        <button @click="sendUpdate" class="button is-info">
          <span class="mdi mdi-check"></span> Update
        </button>
      </div>
    </section>
  </div>
</template>
