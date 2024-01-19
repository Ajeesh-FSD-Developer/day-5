
//for loop
for (let i = 0; i < resume.education.length; i++) {
  console.log("Education:");
  console.log("Degree:", resume.education[i].degree);
  console.log("School:", resume.education[i].school);
  console.log("Graduation Year:", resume.education[i].graduation_year);
  console.log("\n");
}

for (let i = 0; i < resume.experience.length; i++) {
  console.log("Experience:");
  console.log("Title:", resume.experience[i].title);
  console.log("Company:", resume.experience[i].company);
  console.log("Location:", resume.experience[i].location);
  console.log("Start Date:", resume.experience[i].start_date);
  console.log("End Date:", resume.experience[i].end_date);
  console.log("Responsibilities:", resume.experience[i].responsibilities);
  console.log("\n");
}

//for in loop

for (const key in resume.personal_information) {
    console.log(`${key}: ${resume.personal_information[key]}`);
  }
  
  for (const key in resume.skills) {
    console.log(`${key}: ${resume.skills[key].join(", ")}`);
  }

  //for of loop
  for (const education of resume.education) {
    console.log("Education:");
    console.log("Degree:", education.degree);
    console.log("School:", education.school);
    console.log("Graduation Year:", education.graduation_year);
    console.log("\n");
  }
  
  for (const experience of resume.experience) {
    console.log("Experience:");
    console.log("Title:", experience.title);
    console.log("Company:", experience.company);
    console.log("Location:", experience.location);
    console.log("Start Date:", experience.start_date);
    console.log("End Date:", experience.end_date);
    console.log("Responsibilities:", experience.responsibilities);
    console.log("\n");
  }
  
//for each loop
resume.skills.languages.forEach(language => console.log("Language:", language));
resume.skills.frontend.forEach(tech => console.log("Frontend:", tech));
resume.skills.backend.forEach(tech => console.log("Backend:", tech));



  
  
