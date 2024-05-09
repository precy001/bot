const sendButton = document.querySelector('.sendbutton')
const messageBox = document.querySelector('.text')
const landPage = document.querySelector('.logo')
const container = document.querySelector('.container')
const messageContainer = document.querySelector('.messagebox')
const preSetMessage1 = document.querySelector('.js-preset-1')
const preSetMessage2 = document.querySelector('.js-preset-2')
const preSetMessage3 = document.querySelector('.js-preset-3')
const preSetMessage4 = document.querySelector('.js-preset-4')
const bodyMain = document.querySelector('.main')
let index = null
const namea = 'Bot'

let request = ''
let response = ''
        

function respondToPreset(presetIndex){
    landPage.style.display = 'none'
    messageContainer.classList.add('new-margin')
        preSetMessage1.style.display = 'none'
        preSetMessage2.style.display = 'none'
        preSetMessage3.style.display = 'none'
        preSetMessage4.style.display = 'none'
        
        bodyMain.style.display = 'block'

        messageBox.value = ''
        
    if(presetIndex === '1'){
        request = 'When was Yabatech established?'
        response = 'Yaba college of technology (yabatech) was established in 1947'
    }else if(presetIndex === '2'){
        request = 'Who was the first rector in yabatech?'
        response = 'The first rector in yabatech was Mr. J.A Mc Neil'
    }else if(presetIndex === '3'){
        request = 'Where is yabatech located?'
        response = 'Yabatech is located in Yaba, Lagos, Nigeria.'
    }else{
        request = 'How to apply to yabatech'
        response = `The application process for Yaba College of Technology (Yabatech) may vary depending on the level of program you are interested in (National Diploma, Higher National Diploma, or degree programs) and the specific admission requirements for the chosen course of study. Here is a general guide on how to apply:<br>Visit the Official Website: 
            
        Start by visiting the official website of Yaba College of Technology. The official website is the primary source of accurate and up-to-date information.
        Navigate to the Admission Section:
        
        Look for the "Admission" or "Prospective Students" section on the website. This section typically contains information about the admission process, requirements, and application guidelines.
        Read Admission Requirements:
        
        Review the admission requirements for the specific program you are interested in. Requirements may include academic qualifications, O'level results, and any other criteria set by the college.
        Generate an Application Invoice:
        
        Some institutions, including Yabatech, require applicants to generate an application invoice. This is usually done on the college's portal by providing necessary information. The invoice contains details on how to make payment for the application form.
        Make Payment:
        
        Pay the application fee using the specified payment methods. The payment details are usually provided on the generated invoice.
        Fill the Application Form:
        
        After payment, access the application form on the portal and fill in the required information accurately. This may include personal details, academic history, and other relevant information.
        Upload Documents:
        
        Upload scanned copies of required documents, which may include academic certificates, O'level results, birth certificate, and passport photograph.
        Submit the Application:
        
        After completing the application form and uploading the necessary documents, submit the application online. Ensure that you follow all instructions provided during the application process.
        Print Application Form:
        
        After successful submission, print a copy of the completed application form for your records. This may be required during the screening process.
        Attend Screening (if applicable):
        
        Some programs may require applicants to participate in a screening exercise. If applicable, attend the screening at the designated venue and time. The screening process may include verification of documents and possibly an interview.
        Check Admission Status:
        
        After the screening process, regularly check the college's admission portal or notice board for updates on your admission status.`
    }

    bodyMain.innerHTML = `<div class="container border overflow-auto" id="containr">
        <div class="bot">
          <div class="bot-profile"><img src="images/20240118_182844.png" width="50" height="50" alt=""></div>
          <span class="bot-name">You</span>
          </div>
          <div class="request">${request}</div>
      </div>
      
      
      <div class="container border overflow-auto" id="containr">
        <div class="bot">
          <div class="bot-profile"><img src="images/20240118_182844.png" width="50" height="50" alt=""></div>
          <span class="bot-name">Bot</span>
          </div>
          <div class="response">${response}</div>
      </div>
      `

}



function hideBodyAndRemoveText(){
    if(messageBox.value !== ''){
        request = messageBox.value
        request = request.toLocaleLowerCase()
        landPage.style.display = 'none'
        messageBox.value = ''
        if(request === 'hi' ||request ===  'hello' ||request ===  'hey' ||request ===  'HI' ||request === 'HELLO' ||request === 'HEY' ||request ===  'hullo' ||request ===  'HULLO'){
            response = "hi there, how are you doing today?"
        }else if(request.includes('how are you')){
            response = "i'm fine thank you, How are you doing today?"
        }else if(request.includes('good morning') || request.includes('good afternoon') || request.includes('good evening')){
            response = 'Good day to you, How are you doing?'
        }else if(request.includes("i'm fine") || request.includes("am fine")|| request.includes('fine') || request.includes("i'm good") ||request.includes('good') || request.includes('great') || request.includes("i'm great")){
            response = "That's good. What's your question for me today?"
        }else if(request.includes('courses') || request.includes('programs')|| request.includes('program') ||request.includes('programme')||request.includes('programmes')){
            response = "Yabatech in nigeria Offers a variety of courses across different disciplines. They include Engineering, science, Technology, Arts, and Management courses.<br> I recommend checking <a href ='https://www.yabatech.edu.ng' target = '_blank'>Yabatech's official website</a> for the full list."
        }else if(request.includes('location') || request.includes('located') ||request.includes('locate')){
            response = 'Yabatech is located in yaba, Lagos, Nigeria.'
        }else if((request.includes('current')) || (request.includes('present')) || (request.includes('rector'))){
            response = 'The current rector in yabatech is Dr. Engr. I.A Abdul'
        }else if(request.includes('deputy') && request.includes('rector')){
            response = 'The deputy rector academics in yabatrech is Dr. Ismaila Badmus and The deputy rector admin is M.r U.I. Inyang-Udoh'
        }else if(request.includes('website') && request.includes('yabatech')){
            response = "Yabatech's official website is <a href ='https://www.yabatech.edu.ng' target = '_blank'>www.yabatech.edu.ng</a>"
        }else if(request.includes('about') && request.includes('yabatech')){
            response = "Yaba College of Technology, commonly known as Yabatech, is one of the foremost higher educational institutions in Nigeria. Here is some general information about the institution:<br>1. Location: Yabatech is located in Yaba, a suburb of Lagos, Nigeria. The campus is situated in the southwestern part of the country.<br>2. Establishment: The college was established in 1947 as a successor of Yaba Higher College. Over the years, Yabatech has grown to become one of the largest and oldest higher education institutions in Nigeria.<br>3. Academic Programs: Yabatech offers a wide range of programs at various levels, including National Diploma (ND), Higher National Diploma (HND), and degree programs in collaboration with other universities. The college covers a diverse array of disciplines, including engineering, technology, science, arts, and management.<br>4. Facilities: The institution is equipped with modern facilities such as laboratories, workshops, libraries, and lecture halls to support academic activities. Yabatech places emphasis on practical and hands-on training, especially in fields related to technology and engineering.<br>5. Research and Development: Yabatech engages in research activities and contributes to the development of technology and education in Nigeria. Research centers within the institution may focus on specific fields of study.<br> 6. Alumni: Yabatech has a notable alumni community that includes individuals who have excelled in various fields, such as business, technology, arts, and public service.<br>7. Admission: The college conducts admission processes for prospective students seeking to pursue diploma and degree programs. Admission requirements and procedures can be obtained from the official website or the admission office.<br>It's important to note that specific details about Yabatech, such as current academic programs, admission criteria, and administrative information, can change over time. For the most up-to-date and accurate information, it is recommended to visit the official website of Yaba College of Technology or contact the institution directly."
        }else if(request.includes('history') || (request.includes('history') && request.includes('about'))){
            response = `Yaba College of Technology (Yabatech) has a rich history dating back to the mid-20th century. Here is a brief overview of its history:<br><b>Establishment of Yaba Higher College</b>: The roots of Yabatech can be traced back to the establishment of Yaba Higher College in 1934. It was created to provide post-secondary education in various fields, including technology and engineering.<br><b>Transformation into Yaba College of Technology</b>: In 1947, Yaba Higher College underwent a transformation and became Yaba College of Technology. This change marked a shift towards a broader focus on technology and vocational education.<br>Expansion of Programs: Over the years, Yabatech expanded its academic programs to cover a wide range of disciplines, including engineering, technology, science, arts, and management. The institution has continued to evolve to meet the educational needs of a changing society.<br><b>Pioneer Technological Education</b>: Yabatech has been a pioneer in providing technological and vocational education in Nigeria. It played a significant role in training skilled professionals who contribute to the development of various sectors in the country.<br><b>Academic Excellence</b>: The institution has maintained a commitment to academic excellence and practical training. It is known for its emphasis on hands-on experience, especially in fields related to technology and engineering.<br>Partnerships and Collaborations: Yabatech has engaged in partnerships and collaborations with other institutions and industries to enhance its educational offerings and research activities. These collaborations contribute to the overall development of technology and innovation in Nigeria.<br><b>Notable Alumni</b>: Yabatech has produced numerous successful alumni who have excelled in various fields, including business, technology, arts, and public service. The institution's graduates have made significant contributions to the socioeconomic development of Nigeria and beyond.<br>Yaba College of Technology has played a vital role in the educational landscape of Nigeria, contributing to the training of skilled professionals and the advancement of technology and innovation in the country. It continues to be a leading institution in the field of technology and vocational education.`
        }else if (request.includes('apply') && request.includes('yabatech')){
            response =`The application process for Yaba College of Technology (Yabatech) may vary depending on the level of program you are interested in (National Diploma, Higher National Diploma, or degree programs) and the specific admission requirements for the chosen course of study. Here is a general guide on how to apply:<br>Visit the Official Website: 
            
            Start by visiting the official website of Yaba College of Technology. The official website is the primary source of accurate and up-to-date information.
            Navigate to the Admission Section:
            
            Look for the "Admission" or "Prospective Students" section on the website. This section typically contains information about the admission process, requirements, and application guidelines.
            Read Admission Requirements:
            
            Review the admission requirements for the specific program you are interested in. Requirements may include academic qualifications, O'level results, and any other criteria set by the college.
            Generate an Application Invoice:
            
            Some institutions, including Yabatech, require applicants to generate an application invoice. This is usually done on the college's portal by providing necessary information. The invoice contains details on how to make payment for the application form.
            Make Payment:
            
            Pay the application fee using the specified payment methods. The payment details are usually provided on the generated invoice.
            Fill the Application Form:
            
            After payment, access the application form on the portal and fill in the required information accurately. This may include personal details, academic history, and other relevant information.
            Upload Documents:
            
            Upload scanned copies of required documents, which may include academic certificates, O'level results, birth certificate, and passport photograph.
            Submit the Application:
            
            After completing the application form and uploading the necessary documents, submit the application online. Ensure that you follow all instructions provided during the application process.
            Print Application Form:
            
            After successful submission, print a copy of the completed application form for your records. This may be required during the screening process.
            Attend Screening (if applicable):
            
            Some programs may require applicants to participate in a screening exercise. If applicable, attend the screening at the designated venue and time. The screening process may include verification of documents and possibly an interview.
            Check Admission Status:
            
            After the screening process, regularly check the college's admission portal or notice board for updates on your admission status.`
        }else if(request.includes('are students allowed to work') || request.includes('can students work')){
            response ='YES!, There are lots of industries in Europe and job offers abound but you need to be versatile to get one.'
        }else if((request.includes('established') || request.includes('establish')) &&request.includes('when')){
            response= 'Yabatech was established in 1947. It started as a technical college and has evolved into a prominent polytechnic offering a wide range of programs.'
        }else if(request.includes('describe') && request.includes('yabatech')){
            response ='Yabatech stands for Yaba College of Technology. It is a higher education institution located in Yaba, Lagos, Nigeria. It is one of the oldest and most prestigious polytechnics in Nigeria.'
        } else if(request.includes('calender') ){
            response ="The academic calendar may vary from year to year. It's advisable to check the official <a href ='https://www.yabatech.edu.ng' target = '_blank'>Yabatech website</a> or contact the academic affairs office for the current academic calendar."
        }
        else if(request.includes('federal') || request.includes('state')){
            response = 'Yabatech is a federal institution. It is one of the federal polytechnics in Nigeria.'
        }else if(request.includes('accommodation')){
            response ='Yabatech provides accommodation facilities for students. There are hostels on campus where students can reside.'
        }else if((request.includes('requirement') || request.includes('requirements'))){
            response = "requirements vary depending on the program. Generally, applicants need to have a minimum number of credits in relevant subjects at the O'level (SSCE or its equivalent). Specific entry requirements are usually outlined in the admission guidelines for each program."
        }else if(!request.includes('nysc') && !request.includes('jamb') && request.includes('part') && request.includes('time') || request.includes('evening ')){
            response = 'Yabatech offers part-time programs for individuals who may not be able to attend full-time classes. These programs are designed to accommodate working professionals and others with scheduling constraints.'
        }else if(request.includes('large') || request.includes('big') && request.includes('yabatech')){
            response ='The Yabatech campus is quite extensive, with various academic buildings, hostels, sports facilities, and administrative offices spread across the campus.'
        }else if(request.includes('postgraduate')){
            response = "Yabatech primarily focuses on undergraduate and diploma programs. However, it's recommended to check the latest information from the official sources regarding any updates on postgraduate programs."
        }else if(request.includes('duration') || request.includes('how many years')){
            response = 'The duration of programs at Yabatech varies depending on the level and type of program. National Diploma (ND) programs typically last for about two years, while Higher National Diploma (HND) programs may take an additional two years.'
        }else if(request.includes('teaching')){
            response = 'Yabatech employs a combination of theoretical and practical teaching methods. The curriculum includes classroom lectures, laboratory work, industrial training, and other hands-on activities, depending on the program.'
        }else if(request.includes('exam') || request.includes('examination')){
            response ='Examinations at Yabatech are typically conducted through a combination of continuous assessments, assignments, and end-of-semester examinations. The specific examination processes may vary across departments and programs.'
        }else if(request.includes('scolarship')){
            response ='Yabatech may provide scholarship opportunities for outstanding students. Additionally, external organizations and government bodies may offer scholarships to eligible Yabatech students. Students are encouraged to check with the scholarship office or relevant authorities for available opportunities.'
        }else if(request.includes('international') && request.includes('apply')){
            response ='Yabatech welcomes international students, and there may be specific admission processes and requirements for them. Prospective international students should contact the admissions office or the international relations office for guidance.'
        }else if(request.includes('recreation')){
            response = 'Yabatech provides various recreational facilities, including sports grounds, a library, and social spaces. Students can engage in sports activities, cultural events, and other extracurricular activities.'
        }else if(request.includes('fees')){
            response = "School fees can vary depending on the program and level of study. It's advisable to check the official website or contact the institution directly for the most accurate and up-to-date information on tuition fees."
        }else if(request.includes('many') && (request.includes('faculties') || request.includes('faculty') || request.includes('departments') || request.includes('department'))){
            response = "Yaba College of Technology has eight schools and thirty-four academic departments with a total of sixty-four accredited programmes, across ND, HND and Post-HND levels. The college also offers certificate courses. YABATECH offers B.Sc."
        }else if(request.includes('infrastructure')){
            response = `Yaba College of Technology (Yabatech) has a diverse range of infrastructure to support its academic and administrative activities. Please note that developments and changes may have occurred since then. Here's an overview of some of the key infrastructure at Yabatech:

            Classrooms and Lecture Halls:
            
            Yabatech is equipped with classrooms and lecture halls where academic lectures and discussions take place. These spaces are designed to facilitate effective learning environments.
            Laboratories:
            
            The college has well-equipped laboratories for practical sessions, experiments, and research in various disciplines, especially in the fields of science, engineering, and technology.
            Library:
            
            Yabatech has a library that provides students and faculty access to a vast collection of books, journals, and digital resources. The library is essential for research and academic purposes.
            Computer Labs:
            
            Given the emphasis on technology and engineering programs, Yabatech has computer labs with up-to-date hardware and software for students to enhance their practical skills in information technology.
            Hostel Accommodation:
            
            The college provides hostel facilities for students who choose to reside on campus. These hostels offer accommodation for both male and female students.
            Administrative Buildings:
            
            Yabatech has administrative buildings where various administrative functions, including admissions, registration, and academic affairs, are managed.
            Sports Facilities:
            
            The college has sports facilities to promote physical well-being and recreational activities among students. This may include sports fields, courts, and gyms.
            Medical Center:
            
            Yabatech typically has a medical center or health services unit to cater to the health needs of students and staff. This may include basic healthcare and medical consultations.
            Auditoriums and Event Spaces:
            
            Yabatech has auditoriums and event spaces for hosting conferences, seminars, cultural events, and other activities that contribute to the overall development of students.
            Cafeterias and Food Services:
            
            The college provides cafeterias and dining facilities where students can access meals and refreshments. These spaces also serve as social hubs for students.
            Transportation Services:
            
            Yabatech may offer transportation services for students, making it easier for them to commute to and from the college.
            Power and Utilities:
            
            Adequate power supply and utilities are essential for the smooth functioning of the college. Yabatech likely has infrastructure in place to ensure a consistent power supply and other necessary utilities.
            It's recommended to check the official Yabatech website or contact the college directly for the most up-to-date information on its infrastructure and facilities. Additionally, specific details about recent developments or new infrastructure projects may be available through official communication channels.
            
            
            
            
            
            `
        }else if(request.includes('full') && request.includes('yabatech')){
            response = 'The full meaning of yabatech is Yaba college ig technology'
        }else if(request.includes('places') && request.includes('yabatech')){
            response = `Yaba College of Technology (Yabatech) is one of Nigeria's leading higher education institutions, offering a wide range of courses in various fields. Here are some important places within Yabatech along with their full meanings and brief descriptions:

            1. School of Technology (SOT):
               Full Meaning: The School of Technology houses departments related to engineering, technology, and applied sciences. This includes programs like Electrical Engineering, Civil Engineering, Computer Engineering, and more.
            
            2. School of Environmental Studies (SES):
               Full Meaning: The School of Environmental Studies focuses on disciplines related to environmental science, architecture, urban and regional planning, and estate management.
            
            3. School of Management & Business Studies (SMBS):
               Full Meaning: This school covers areas such as business administration, marketing, accountancy, banking and finance, and general management courses.
            
            4. School of Liberal Studies (SLS):
               Full Meaning: The School of Liberal Studies includes courses in general education, social sciences, languages, and humanities.
            
            5. Central Administrative Building (CAB):
               Description: The CAB is where administrative functions such as admissions, registration, and academic affairs are managed. It's also where students can access services like counseling and student affairs.
            
            6. Yabatech Library:
               Description: The college library is a central hub for academic resources, research materials, and study spaces for students and faculty.
            
            7. Engineering Workshops:
               Description: These workshops provide hands-on training and practical experience for students studying engineering-related disciplines.
            
            8. Yabatech Sports Complex:
               Description: The sports complex includes facilities for various sports and recreational activities, promoting physical fitness and well-being among students.
            
            9. Yabatech Medical Centre:
               Description: The medical center provides healthcare services to students and staff, including consultations, treatments, and medical emergencies.
            
            10. Student Hostels:
                Description: Yabatech has on-campus hostels where students can reside during their academic tenure, providing a convenient living option close to academic facilities.
            
            These places collectively contribute to the holistic educational experience and campus life at Yaba College of Technology.`
        }else if(request.includes('school of technology')){
            response = 'The School of Technology houses departments related to engineering, technology, and applied sciences. This includes programs like Electrical Engineering, Civil Engineering, Computer Engineering, and more.'
        }else if(request.includes('sot')){
            response = 'The School of Technology houses departments related to engineering, technology, and applied sciences. This includes programs like Electrical Engineering, Civil Engineering, Computer Engineering, and more.'
        }else if(request.includes('school of environmental studies')){
            response =  'The School of Environmental Studies focuses on disciplines related to environmental science, architecture, urban and regional planning, and estate management.'
        }else if(request.includes('ses')){
            response =  'The School of Environmental Studies focuses on disciplines related to environmental science, architecture, urban and regional planning, and estate management.'
        }else if(request.includes('school of management')){
            response = 'This school covers areas such as business administration, marketing, accountancy, banking and finance, and general management courses.'
        }else if(request.includes('smbs')){
            response = 'This school covers areas such as business administration, marketing, accountancy, banking and finance, and general management courses.'
        }else if(request.includes('school of liberal studies')){
            response = 'The School of Liberal Studies includes courses in general education, social sciences, languages, and humanities.'
        }else if(request.includes('sls')){
            response = 'The School of Liberal Studies includes courses in general education, social sciences, languages, and humanities.'
        }else if(request.includes('Central Administrative Building')){
            response = `Description: The CAB is where administrative functions such as admissions, registration, and academic affairs are managed. It's also where students can access services like counseling and student affairs.`
        }else if(request.includes('cab')){
            response = `Description: The CAB is where administrative functions such as admissions, registration, and academic affairs are managed. It's also where students can access services like counseling and student affairs.`
        }else if(request.includes('yabatech library')){
            response = 'Description: The college library is a central hub for academic resources, research materials, and study spaces for students and faculty.'
        }else if(request.includes('engineering workshops')){
            response = 'Description: These workshops provide hands-on training and practical experience for students studying engineering-related disciplines.'
        }else if(request.includes('sports complex')){
            response = 'Description: The sports complex includes facilities for various sports and recreational activities, promoting physical fitness and well-being among students.'
        }else if(request.includes('medical centre')){
            response = 'Description: The medical center provides healthcare services to students and staff, including consultations, treatments, and medical emergencies.'
        }else if(request.includes('hostels')){
            response = 'Description: Yabatech has on-campus hostels where students can reside during their academic tenure, providing a convenient living option close to academic facilities.'
        }else if (request.includes('mail') && request.includes('yabatech')){
            response = 'Yabatech has an official email address where you can send complaints or inquiries: <a href ="mailto:info@yabatech.edu.ng">info@yabatech.edu.ng</a>'
        }else if(request.includes('social media')){
            response = `Yabatech is active on social media platforms, and you can connect with them for updates, announcements, and general inquiries:
            <br> Facebook: <a target="_new" rel="noreferrer" href="https://www.facebook.com/yabatechofficial/">@yabatechofficial</a> <br>Twitter: <a target="_new" rel="noreferrer" href="https://twitter.com/Yabatechng">@Yabatechng</a> <br>Instagram: <a target="_new" rel="noreferrer" href="https://www.instagram.com/yabatech_ng/">@yabatech_ng</a>`
        }else if(request.includes('nysc') && request.includes('part time') || request.includes('full time')){
            response = 'While full-time students at Yabatech typically participate in the NYSC program after graduation, part-time students may also have opportunities to do so provided they meet the necessary criteria and requirements.'
        }else if(request.includes('jamb') && request.includes('part time')){
            response = 'No, you do not need to write the JAMB UTME exams to apply for the YABATECH part-time programme. '
        }else if(request.includes('dressing') || request.includes('dressing code')){
            response = `Yaba College of Technology (Yabatech) typically has a dress code policy that students are expected to adhere to while on campus. The dress code is usually designed to promote professionalism, decency, and a conducive learning environment. Here are some general guidelines that may apply to the dress code at Yabatech:

            <b>Decent and Modest Attire:</b>
            Students are generally expected to dress modestly and decently while on campus. This includes avoiding clothing that is too revealing, overly casual, or inappropriate for an educational setting.
            No Offensive or Controversial Clothing:
            Clothing with offensive language, symbols, or images is typically not allowed on campus. This includes clothing that promotes violence, discrimination, or any form of hate speech.
            <b>Smart Casual or Business Casual:</b>
            The dress code at Yabatech often leans towards smart casual or business casual attire. This may include collared shirts, blouses, slacks, skirts or dresses of appropriate length, and closed-toe shoes.
            <b>Lab Attire:</b>
            For students in technical or scientific programs that require lab work, there may be specific guidelines for lab attire. This could include wearing lab coats, safety goggles, and closed shoes for safety purposes.
            Special Events or Occasions:
            During special events, ceremonies, or academic functions, students may be required to dress more formally. This could involve wearing traditional attire, academic gowns, or specified dress codes for the occasion.
            <b>Respect for Cultural Diversity:</b>
            Yabatech is a diverse institution, and students are encouraged to respect and appreciate cultural diversity in their choice of clothing. Traditional attire representing different cultures is often welcomed and celebrated.
            Personal Hygiene and Grooming:
            Alongside clothing, students are expected to maintain good personal hygiene and grooming standards while on campus.
            It's essential for students to familiarize themselves with the specific dress code policies outlined by Yabatech. These guidelines are usually communicated through student handbooks, notices, or official communications from the college authorities. Violation of the dress code may result in warnings, disciplinary actions, or restrictions from certain campus facilities or activities.`
        }else if(request.includes('rules and regulations') ){
            response = `Yaba College of Technology (Yabatech) has a set of rules and regulations that students are expected to adhere to. These rules are designed to maintain order, discipline, and a conducive learning environment on campus. While specific rules may vary, here are some common rules and regulations that may apply to students at Yabatech:

            Academic Integrity:
            Plagiarism and cheating in exams are strictly prohibited.
            Students are expected to submit their own original work and give proper credit for sources used in their assignments.
            Attendance and Punctuality:
            Regular attendance in classes, lectures, and academic activities is required.
            Students are expected to be punctual and arrive on time for classes and examinations.
            Code of Conduct:
            Respect for faculty, staff, and fellow students is mandatory.
            Discriminatory behavior, harassment, bullying, and violence are not tolerated.
            Students are expected to maintain courteous and respectful behavior in all interactions on campus.
            Dress Code:
            As mentioned earlier, students are expected to dress modestly, decently, and appropriately for an educational environment.
            Use of Facilities:
            Students are expected to use college facilities, equipment, and resources responsibly and for academic purposes only.
            Vandalism, theft, or misuse of college property is strictly prohibited.
            Alcohol and Substance Abuse:
            Consumption of alcohol and illegal substances on campus is prohibited.
            Students are expected to maintain a healthy and drug-free lifestyle while on campus.
            Safety and Security:
            Students must comply with safety guidelines and procedures, especially in laboratories, workshops, and other technical areas.
            Respect for campus security protocols and emergency procedures is mandatory.
            Library Rules:
            Adherence to library rules and regulations, including borrowing and returning books on time, maintaining a quiet environment, and respecting library staff and fellow users.
            Residential Rules (if applicable):
            For students residing in college hostels, there are additional rules related to curfews, visitors, cleanliness, and communal living.
            Disciplinary Actions:
            Violation of rules may result in disciplinary actions, including warnings, fines, suspension, or expulsion, depending on the severity of the offense.
            It's important for students to familiarize themselves with the specific rules and regulations outlined by Yabatech. These rules are usually communicated through student handbooks, notices, or official communications from the college authorities. Adherence to these rules contributes to a positive learning experience and a harmonious campus environment.`
        }else if(request.includes('odfel') || request.includes('codfel')){
            response = 'ODFEL stands for Open, Distance, Flexible And E-Learning <br> <a href = "https://www.yabatech.edu.ng/yabatechnews.php?id=357&shortcode=98YUIol2323&haid=026694662db5bdb5b66e1452d2cba092">Click here for more info</a>'
        }else if(request.includes('motto') && request.includes('yabatech')){
            response = 'Yabbatech motto is <b>Labor et Veritate</b>'
        }else if(request.includes('radio station')){
            response = 'Yabatech radio station is 89.3fm'   
        }else if(request.includes('semester duration') || request.includes('semester') && request.includes('months')){
            response = 'The duration of a semester in yabatech is 5 months for full time and 4 months for part time'
        }
         else{
            response ="Sorry i don't have an answer to this question, you would be redirected to yabatech's website in 3 seconds"
            setTimeout(function() {
                window.location.href = 'https://www.yabatech.edu.ng'
            }, 3000)
        }

       
        
        messageContainer.classList.add('new-margin')
        preSetMessage1.style.display = 'none'
        preSetMessage2.style.display = 'none'
        preSetMessage3.style.display = 'none'
        preSetMessage4.style.display = 'none'
        
        bodyMain.style.display = 'block'
        bodyMain.innerHTML = `<div class="container border overflow-auto" id="containr">
        <div class="bot">
          <div class="bot-profile"><img src="images/20240118_182844.png" width="50" height="50" alt=""></div>
          <span class="bot-name">You</span>
          </div>
          <div class="request">${request}</div>
      </div>
      
      
      <div class="container border overflow-auto" id="containr">
        <div class="bot">
          <div class="bot-profile"><img src="images/20240118_182844.png" width="50" height="50" alt=""></div>
          <span class="bot-name">Bot</span>
          </div>
          <div class="response">${response}</div>
      </div>
      `

      
    }
}


messageBox.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        hideBodyAndRemoveText();
    }
})

sendButton.addEventListener('click', hideBodyAndRemoveText);


