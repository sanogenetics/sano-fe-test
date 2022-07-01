<script setup></script>

<template>
   <div class="text-center mb-6">
      <h1 class="text-2xl">Welcome to the Sano Frontend test 🧬</h1>
   </div>
   <!-- Instructions -->
   <p class="mb-6">
      In this test, you will display a list of studies which are linked to a fake user account (user id: "sano_secret_agent" 🤠) and be able to Leave/Join any
      study. The list of studies should look beautiful, be accessible and mobile friendly.
   </p>
   <p class="mb-6">
      If you have spare time, bonus points will be given for using <span class="italic">vuex-orm</span> and <span class="italic">vuex-orm-axios</span>, but
      these are not essential.
   </p>

   <p class="mb-6">Add your development magic to the existing <RouterLink to="/studies">Studies</RouterLink> page.</p>

   <p class="mb-6">Note: No database changes will be made by any of the endpoints provided so page reloads will retrieve the initial study list.</p>

   <p class="mb-6 font-bold">Task List:</p>

   <ol class="list-decimal list-inside">
      <li class="mb-4">
         Clicking on the consent sheet button should show a modal containing the consent text. Please build your own modal, don't use third party modals.
      </li>
      <li class="mb-4">
         Fetch an array of studies from the endpoint provided.
         <pre class="endpoint">GET https://dev.sanogenetics.com/dev/home-test/users/&lt;user_id&gt;/studies</pre>
      </li>
      <li class="mb-4">
         Display the list of studies. Study Name, Run By (researcher) & Status of each study should be displayed in the list.
         <br />
         The Status should either say "Enrolled", "Withdrawn" or "Not Started". The status can be deduced from the joined property. If the user has joined the
         study, it means that they are enrolled.
      </li>
      <li class="mb-4">
         Each study list item should also have a 'Join/Leave' button. If the user is enrolled in the study, the button text should say 'Leave Study'. If the
         user has not started the study yet or they previously left/withdrew from the study, the button text should say "Join Study".

         <ul class="list-disc ml-6 mt-4">
            <li class="mb-4">
               Clicking the 'Leave Study' button should withdraw the user from the study. It should send a DELETE request to the provided endpoint. When you get
               the SUCCESS response back, the button should then say 'Join Study'.
               <pre class="endpoint">DELETE https://dev.sanogenetics.com/dev/home-test/users/&lt;user_id&gt;/studies/&lt;study_id&gt;</pre>
               <div>Or</div>
               <pre class="endpoint">DELETE https://staging.sanogenetics.com/staging/home-test/users/&lt;user_id&gt;/studies/&lt;study_id&gt;</pre>
            </li>
            <li class="mb-4">
               Clicking the 'Join Study' button should add the user to study. It should send a PUT request to the provided endpoint. When you get the SUCCESS
               response back, the button should then say 'Leave Study'.
               <pre class="endpoint">PUT https://dev.sanogenetics.com/dev/home-test/users/&lt;user_id&gt;/studies/&lt;study_id&gt;</pre>
               <div>Or</div>
               <pre class="endpoint">PUT https://staging.sanogenetics.com/staging/home-test/users/&lt;user_id&gt;/studies/&lt;study_id&gt;</pre>
            </li>
         </ul>
      </li>
      <li class="mb-4">
         The list of studies should look nice, use the Sano colour scheme, be <em>accessible</em> and <em>mobile friendly</em>. Things we look for in
         accessibility: Is the HTML markup correct? Can we navigate the Studies page by keyboard only (tabbing)? Will screenreaders be able to navigate the
         page.
      </li>
      <li class="mb-4">Setup a simple Cypress test which will test the functionality above.</li>
   </ol>

   <p class="mb-6">We hope you have fun doing the test 😁</p>
</template>
