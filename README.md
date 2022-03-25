# KUHosteler
An resoponsive WebApp which solve Hostel management problem and connect people

#` How To Start`
   
    follow the steps.....

  ## `Server`

   1. Clone the project :
      - clone the project form ```url= https://github.com/shiva3312/KUHosteler.git ``` using commnad  ```~ git clone <url>```

   2. Install dependencies :
      - install all dependencies using command  ```~ npm install ```

   3. Create .env file :
      - create .env file  in sever directory using command  ```~ touch .env```

   4. Add Secrete key :
      - add following secret key in ```.env ```file
       ```
       PORT=8000
       MONG_URL=mongodb://localhost:27017/hostelerDB
       JWT_SECRETE=ONE.OF.MY/BEST.SECTE.I_HAVE.BEST.TEAM

       ```
   5. Add .gitignore file
    - create a .gitignore file using commnad    ``` ~ touch .gitignore ```
    - add following extension and file
      ```
      .env
      *.txt
      node_modules/
      jspm_packages/
      *.cab
      *.msi
      *.msm
      *.msp
      *.lnk
      # node-waf configuration
      .lock-wscript
      build/Release
      node_modules/
      jspm_packages/
      typings/
      .npm
      .eslintcache
      .node_repl_history      
      ```

   6. Start mongodb Server :
      - use command ``` ~ mongod ```

   7. Start sever :
      - start sever using command ``` ~ npm run dev ```
      
     when you get the message in console that ...
          Sever is running on port 8000
          DataBase connected 

      it means backend is running perfectly ......

      `now move for Fron-End .... ` 
     


 ## `Client`
 
   1. Instal react dependencies :
       - Go to client file and run command ```npm i`` to intall the all require packages .
    
   2. Run  :
       - Run the client using command ```npm start```
       - App will be run on ```http://localhost:3000```
      
         it will take few minutes in compilation and running the program .

         when you get msg like ..
         ```
            Starting the development server...
            Compiled successfully!
              ...
               some other info.....
               ...
            runtime modules 28.1 KiB 13 modules
            webpack 5.69.1 compiled successfully in 60540 ms
          
         ```

        it means everything is perfectly running.



         happy coding ...
