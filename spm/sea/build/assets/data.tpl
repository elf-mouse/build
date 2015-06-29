{{#if list}}
<ul>
  {{#each list}}
  <li>{{name}} - {{num}}</li>
  {{/each}}
</ul>
{{else}}
<p>No Data.</p>
{{/if}}
