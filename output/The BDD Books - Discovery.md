# The BDD Books - Discovery

Chapter 1. What Is BDD?
=======================

Introduction
------------

**Behavior Driven Development** (**BDD**) is an agile approach to delivering software that has been gaining momentum over the past ten years or so. In this chapter, we take a look at why BDD came into existence, what challenges it addresses, and take a high-level look at how it works.

#### Seb's story: BDD, ATDD, or Specification By Example?

I used to get confused by all the different names that I read in blog posts. There was Behavior Driven Development (BDD), **Acceptance Test-Driven Development** (**ATDD**), and Specification By Example. I tried to work out how they differed, but eventually, I realized (aided by Liz Keogh, [http://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/](http://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/)) that they were just different names for the same thing.

The Missing Link
----------------

The purpose of software development is to deliver solutions to business problems. A continuing challenge is to verify that the software actually satisfies requirements. Waterfall methods had slow feedback cycles built into them, allowing projects to go seriously off track. In response, the industry began to experiment with lightweight methodologies, such as **XP** and **Scrum**.

Agile iterations are often wrongly implemented as mini-waterfalls. Teams spend weeks implementing a user story. _After_ that comes testing, to make sure they got it right. When they discover a mistake, they have to fix the problem and retest the story — a tedious and time-consuming process. The resulting delay in feedback continues to limit the benefits that agile development methods can deliver:

![Figure 1.1: Agile mini-waterfall
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_01.jpg)

###### Figure 1.1: Agile mini-waterfall

**Test-Driven Development** (**TDD**) helps speed up the feedback loop by demanding that teams write automated tests _before_ they write the code. That in itself is not enough.

#### Gaspar's Story: Automation Is Not Enough

In a company I was working for, testing new features was always chaotic. We never did any testing until after the feature was done, and it was only then that we discovered we had misunderstood things that had previously seemed obvious. Unfortunately, since this testing was all manual, things did not get any better after this. We continued to need real people running through test scripts to make sure that the application still behaved as expected. Tedious, manual regression testing.

We needed automation – this is how we wanted to improve the regression testing problem. In addition, automating our scripts required us to write code, and the code became hard to follow, even for other developers. This prevented discussions about misunderstandings and different interpretations of the obvious. We needed a solution that made tests automatable but preserved their connection to requirements.

In the early days, **JUnit** required developers to use the word **test** in their method names, and this overemphasized one goal of unit tests (testing) at the expense of other goals, such as design, documentation, and definition of the expected behavior. By giving them a name such as **OrderTest**, they become detached from the business requirement as soon as the test has been completed. And, as time goes by, this gap gets bigger and bigger.

Dan North noticed this problem and suggested some practical rules for naming and structuring the test methods to preserve their connection with the requirements (similar problems had been observed by other people, such as Kent Beck with Customer Tests (_Extreme Programming Explained: Embrace Change_), Joshua Kerievsky ([https://www.industriallogic.com/blog/storytest-driven-development-article/](https://www.industriallogic.com/blog/storytest-driven-development-article/)), Ward Cunningham ([http://fit.c2.com/](http://fit.c2.com/)), and Eric Evans (_Domain-driven Design: Tackling Complexity in the Heart of Software_). He also explained that the easiest way to verify whether our tests expressed the expected behavior was to show them to business representatives. However, business people rarely read source code, so he developed a small tool that performed a few simple transformations to make the test results business-readable.

He called this concept **Behavior Driven Development** (**BDD**) ([https://dannorth.net/introducing-bdd/](https://dannorth.net/introducing-bdd/)), intentionally removing the word **test** to encourage business people to remain engaged throughout the process. BDD helps maintain a connection between the requirements and the software, and, as such, acts as a bridge. Gojko Adzic even called his first book _Bridging the communication gap_ (Adzic, Gojko. Bridging the Communication Gap: Specification by Example and Agile Acceptance Testing. London: Neuri, 2009. Print.).

The bridge is made out of _examples_. Every test is an example. Each example is an expression of a required system behavior. If you have sufficient examples, you define the behavior of the system, and you document the requirements. Business people remain engaged because the examples are expressed in business language. Fast feedback is preserved because the examples are automated.

These examples are often written using the _Given_, _When_, and _Then_ keywords introduced by Chris Matts ([https://theitriskmanager.wordpress.com/about/](https://theitriskmanager.wordpress.com/about/)) and called _scenarios_:

**Scenario**: Allow address change while the order is in preparation

**Given** the client's order is currently **in preparation**

**When** the client changes the delivery address

**Then** the change should be accepted

**And** the new address should be set as the delivery address

The scenarios represent the requirement details, and they are formal enough to be executed by a computer in order to give feedback about the implementation. Teams sometimes write their own tools to support this, but there are several freely available BDD tools that make this simple, such as **SpecFlow** ([http://www.specflow.org](http://www.specflow.org)) and **Cucumber** ([http://cucumber.io](http://cucumber.io)):

![Figure 1.2: Scenarios link requirements to software
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_02.jpg)

###### Figure 1.2: Scenarios link requirements to software

The bridge built with the examples has been ignored by software developers for decades (Brian Marick was an early exponent of examples: [http://www.exampler.com/old-blog/2003/08/22/#agile-testingproject-2](http://www.exampler.com/old-blog/2003/08/22/#agile-testingproject-2)). Agile itself didn't address this directly, but BDD does. As Matt Wynne said ([https://www.youtube.com/watch?v=ReEkLYoXjK8](https://www.youtube.com/watch?v=ReEkLYoXjK8)), "BDD can save your agile." In short, BDD is the missing link.

How Does BDD Work?
------------------

Examples (and their formalized representation – scenarios) play a critically important role in BDD. To understand how BDD works, let's have a look at the way that these scenarios are created and how they drive the development process.

BDD is typically used in agile projects, and the requirements are discovered using user stories that the team discusses throughout the project. Defining and prioritizing good user stories is an exciting challenge in itself. There are many good methods you can use, such as impact mapping or story mapping, but they are not directly related to BDD and are therefore beyond the scope of this book. BDD kicks in when the details of the user stories are discussed by the team for the first time (see _Chapter 4_, _Who Does What and When_).

In a project following the BDD approach, we collect and discuss examples while working with a user story. We use these examples to explore and illustrate the expected behavior of the business domain.

User stories are typically broken down into acceptance criteria or business rules, but they are often subject to misunderstandings. Focusing on examples makes the intention of these rules clear—each rule should be _illustrated_ by one or more examples. However, examples also enable us to _explore_ our understanding of a rule. Exploration often leads to the discovery of complexities and assumptions that otherwise would not be found until much later in the development process.

In _Chapter 2_, _Structured Conversation_, we show in more detail what these examples look like and how you can facilitate requirement workshops to discover them. For now, let's say that examples are concrete usage descriptions of how the application or one of its features should behave. The better the examples you collect during the requirement workshop, the easier it will be to deliver the project successfully using BDD.

Examples can take various forms. They can appear as input-output data pairs, sketches of the user interface, bulleted lists of different steps of a user workflow, or even an Excel workbook illustrating a calculation or a report. The only thing that is common to all examples is that they describe a behavior as a combination of _context_, _action_, and _outcome_, which we'll describe in detail in _Chapter 3_, _What Is an Example?_

Once the user story is prepared and discussed with the team, the development phase starts. Using BDD, teams implement the expected behavior that was illustrated by the examples. In order to use the examples to drive the development, we _formulate_ some of them into scenarios. The scenarios can be considered part of the code base of the application because they are used to verify a specific version of the application. BDD tools turn these scenarios into executable tests _before_ the related behavior has been implemented in the application itself.

#### Seb's Story: Formulation

When I first started working with Gaspar, I wondered why he kept using the word "formulate". It's not a term used by software professionals in general, or BDD practitioners in particular. He explained that it was the best word that he had found to describe the process of turning concrete examples into business-readable documentation. I was pretty sure there must be a better word, so I went away to try to think of one.

I tried substituting "translate", but there's a lot of creative energy required to write a good BDD scenario. "Translate" didn't do it justice, nor did "convert".

The Merriam-Webster dictionary defines "formulate" as _to put into a systematized statement or expression_. This is an accurate description of what we do when we convert examples into scenarios. This is an important task that is uniquely focused on by BDD practitioners, and it does deserve a precise name. _Formulation_ is ideal!

With TDD, we drive the application development by writing a test first—one that initially fails. Then, we implement the application so that the test passes. After a code cleanup (refactoring), we can move on to the next test. This cyclic development flow is illustrated in _Figure 1.3_:

![Figure 1.3: The TDD cycle
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_03.jpg)

###### Figure 1.3: The TDD cycle

BDD drives the development in a very similar way, although the scenarios are often expressed at a higher level. We start by writing a new scenario that should initially fail. Then, we iteratively implement the automation and application code until the scenario finally passes. After cleaning up the code base (refactoring), we can move on to the next scenario.

BDD does not replace TDD. Teams who use BDD often use TDD to ensure the quality of the inner structure of the application. _Figure 1.4_ shows the BDD cycle and how it fits the TDD loop:

![Figure 1.4: The BDD cycle
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_04.jpg)

###### Figure 1.4: The BDD cycle

An executable BDD scenario provides useful feedback for the entire team, including business representatives:

*   It gives feedback about the implementation's correctness for the developers.
*   It gives feedback about the solution for the product owner.
*   It describes the implemented behavior, helping business analysts to understand existing functionality.
*   It gives a signal for the manual, exploratory testers that a feature is ready for testing.
*   It provides a safety net for the developers, identifying any unwanted side effects of changes.
*   It provides detailed documentation relating to the application for the support team.
*   It defines a domain language that is understood by everyone.

What About Testing?
-------------------

We mentioned earlier that the word **test** had been intentionally left out from the BDD name. The aim was to achieve better engagement with business representatives. When first hearing about BDD, many testers have concerns about how it will affect their role, responsibilities, and position.

BDD does not replace classic testing and testing skills. In fact, BDD does not define how testing should be performed. Instead, it provides a set of practical guidelines that facilitate the _agile testing process_. The basic concept of agile testing is to move the responsibilities of testing from finding and reporting application issues to ensuring that these issues are never added to the code base in the first place.

It's a little bit like the relationship between catching criminals and crime prevention. Crime prevention is a much nicer and cheaper way of ensuring security, but it does not replace the presence of police on the streets. The same happens with testing in a BDD project. Testers are involved in all project requirement discussions to help prevent bugs. Later on, they will still work on verifying the correctness of the product created – catching bugs.

A significant proportion of defects (J.-C. Chen and S.-J. Huang, "An empirical analysis of the impact of software development problem factors on software maintainability," Journal of Systems and Software, vol. 82, pp. 981-992, June 2009.) are rooted in problems that arise from misunderstood requirements. Misunderstandings can arise for many reasons: language barrier issues, unspecified combinations, ambiguous domain terms, or different interpretations of common sense. Testers can help by pointing out inconsistencies, identifying examples, or considering edge cases while a user story is being discussed. Testers can also give support by evaluating approaches to testing new features.

Not all defects are eliminated during these discussions. Verification remains critical, though it does become slightly different. Due to the high level of automation, less time is spent on manual regression testing and more on exploratory verification. The latter needs a much broader sense of correctness, which can be ensured only by a human. This kind of verification is usually done through _exploratory testing_. The change of focus described above leads to better integration of testers into the team.

A Language That Is Understood By Everyone
-----------------------------------------

Robert C. Martin, alias Uncle Bob, has said that a software project cannot be successful without the development team becoming domain experts at some level. You can write good software only for problems that you understand. Anything else works only for the short term. When you decided to work as an IT professional, you probably did not expect to require deep knowledge of heavy-duty construction equipment or sports event broadcasting.

Whenever you join a project, you will certainly become familiar with its business domain. At the end of the day, this makes our job more interesting. We should see every project as a voyage of discovery.

#### Gaspar's story: Find the right words

I was renovating the roof of our terraced house and had to go to the plumbing shop to buy a few missing items. I knew what I needed because I had already seen hundreds of gutters. Nevertheless, the first five minutes were spent explaining what I wanted and discovering what the name of that "thing" was. We even needed to draw some sketches. Once we agreed on what the "thing" I wanted was called, they could serve me quickly. It was even in stock!

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_05.jpg)

Figure 1.5: Gutter things

Software projects have the same challenges. A rough understanding of the project's business domain is usually not enough to provide a precise solution. We have to define a language in which the customer can explain their problems in detail, and in which we also can explain the solution we are going to provide. A language that is understood by everyone. Eric Evans uses the term **Ubiquitous Language**  ([http://martinfowler.com/bliki/UbiquitousLanguage.html](http://martinfowler.com/bliki/UbiquitousLanguage.html)) for this in domain-driven design.

The team writes scenarios using this language. If we use these scenarios to drive our implementation, the model we create for the solution will remain close to the business domain. This, in turn, helps keep our software easy to understand and maintain.

Living Documentation
--------------------

If you have heard about BDD, you have probably stumbled across the term _living documentation_. This is a kind of documentation that never gets outdated, or at least you will be immediately informed when it does.

It is easy to see that the scenarios make up a kind of living structure because we can always verify whether a scenario is supported by the application or not. If it is supported, the scenario passes. If not, the scenario fails. Thanks to the ubiquitous language, even business representatives will immediately know which expectations may not be fulfilled by our solution.

It is harder to see how these scenarios can be used as documentation. The target users of this kind of living documentation are the business representatives of the project and the development team (including testing, operations, and support). Scenarios are written in a language that uses domain-specific terms to describe the behavior of the application. As such, they are readable by, and interesting to, domain experts, but not necessarily for end users. Therefore, the scenarios are not a replacement for end user documentation or online help.

Scenarios are most useful when someone needs to check how the system works in specific situations: "Is an 'OR' search supported?", "Can our system handle zero interest rates?", "What happens if multiple users attempt to change the same order?" We could answer these questions by trying them out on a test installation, but that might require complex setup steps that take a lot of time and effort.

If you are planning a new feature and would like to know its impact on the system, or if you are on a support call, you can search for a few keywords in the living documentation. The scenarios found will describe the current behavior of the system, providing you with the information you were looking for.

The success of using scenarios as living documentation mainly depends on whether you can make it accessible for the target audience in a convenient way. It is hard to imagine that a business analyst will open Visual Studio, do a Git pull, find the scenarios that they are interested in, and read them as a plain text file. Fortunately, there are several tools that can help with this, thanks to the Gherkin open specification format ([https://github.com/cucumber/gherkin](https://github.com/cucumber/gherkin)) used by the scenarios shown in this book. Make sure you check out **Cucumber Pro** ([https://cucumber.io/pro](https://cucumber.io/pro)), **Pickles** ([http://www.picklesdoc.com/](https://www.relishapp.com/)), **Relish** ([https://www.relishapp.com/](https://www.relishapp.com/)), **SpecFlow+ Runner** ([http://www.specflow.org/plus/runner/](http://www.specflow.org/plus/runner/)), and **SpecLog** ([http://www.speclog.net/](http://www.speclog.net/)), to name a few.

What Is BDD, Then?
------------------

BDD is an agile approach that consists of three practices that have to be addressed in order. The first practice is _discovery_, a structured, collaborative activity that uses concrete examples to uncover the ambiguities and misunderstandings that traditionally derail software projects.

The second practice is _formulation_, a creative process that turns the concrete examples produced during discovery into business-readable scenarios. A subsequent review of the scenarios delivers the confidence that the team really has understood what the business is asking for.

The third, and final, practice is _automation_, where code is written that turns the scenarios into tests. The benefits of automation are many and varied:

*   When the tests pass, the development team can be confident that they have delivered what the business has asked for.
*   The tests give the development team a safety net when the time comes to modify the code.
*   The tests form living documentation of how the system behaves, which is readable by the business and is guaranteed to be up to date:

![Figure 1.6: BDD practices
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_06.jpg)

###### Figure 1.6: BDD practices

Many development teams come to BDD through the desire to improve their test automation. Improved test automation **is** one of the significant outcomes of following a BDD approach, but it is a _downstream_ outcome. Unless you adopt the practices in the order described (_discovery_, _formulation_, _automation_), you will not gain the expected benefits.

Conversely, you will achieve significant improvements in your software development activities just by practicing _discovery_ on its own. Add _formulation_ and you'll get the extra benefits that come from growing a truly ubiquitous language through an active review and feedback process.

And finally, creating an extra, business-language layer of automated tests is expensive – you'll only get a good return on your investment if you successfully engage the business team members. So, don't focus on the automation tools ([http://lizkeogh.com/2014/01/22/using-bdd-with-legacy-systems/](http://lizkeogh.com/2014/01/22/using-bdd-with-legacy-systems/)) until you've got good at collaborating across the team.

What We Just Learned
--------------------

In this chapter, you've been on a whirlwind tour of BDD. There's a lot going on!

We started by describing the challenges that BDD was created to address – the failures caused by misunderstandings within a project team. We showed how examples (and the scenarios that we formulate from them) make an excellent bridge between business requirements and technical specifications, effectively flushing out ambiguities.

These scenarios, written in the project's ubiquitous language, act both as documentation and as tests. As documentation, they close the feedback loop between the business and delivery team members, demonstrating the successful communication of ideas. As tests, they show that the solution being developed is meeting the business requirements, as well as acting as a valuable safety net that will provide confidence whenever changes need to be made to the software. Finally, once the scenarios are automated, there's a further benefit: documentation that demonstrably describes the actual functionality provided by the software.

We also discussed the relationship between BDD and testing. They are related, but distinct. The focus of BDD is collaboration, leading to clear requirements understood by the whole team. The examples make great test cases and (once formulated) documentation, so there is definitely testing going on. However, the purpose is to assure all concerned that development is progressing in the correct direction, not to confirm exhaustively that the correct code has been written. This is still covered by the professional practices of developers and testers—that is, developers writing automated programmer tests, and testers verifying the solution using scripted and exploratory testing.

The remainder of this book digs deeper into the collaborative, _discovery_ practice, and how to fit it into your project's process.


Introduction
------------

**Behavior Driven Development** (**BDD**) is an agile approach to delivering software that has been gaining momentum over the past ten years or so. In this chapter, we take a look at why BDD came into existence, what challenges it addresses, and take a high-level look at how it works.

#### Seb's story: BDD, ATDD, or Specification By Example?

I used to get confused by all the different names that I read in blog posts. There was Behavior Driven Development (BDD), **Acceptance Test-Driven Development** (**ATDD**), and Specification By Example. I tried to work out how they differed, but eventually, I realized (aided by Liz Keogh, [http://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/](http://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/)) that they were just different names for the same thing.


The Missing Link
----------------

The purpose of software development is to deliver solutions to business problems. A continuing challenge is to verify that the software actually satisfies requirements. Waterfall methods had slow feedback cycles built into them, allowing projects to go seriously off track. In response, the industry began to experiment with lightweight methodologies, such as **XP** and **Scrum**.

Agile iterations are often wrongly implemented as mini-waterfalls. Teams spend weeks implementing a user story. _After_ that comes testing, to make sure they got it right. When they discover a mistake, they have to fix the problem and retest the story — a tedious and time-consuming process. The resulting delay in feedback continues to limit the benefits that agile development methods can deliver:

![Figure 1.1: Agile mini-waterfall
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_01.jpg)

###### Figure 1.1: Agile mini-waterfall

**Test-Driven Development** (**TDD**) helps speed up the feedback loop by demanding that teams write automated tests _before_ they write the code. That in itself is not enough.

#### Gaspar's Story: Automation Is Not Enough

In a company I was working for, testing new features was always chaotic. We never did any testing until after the feature was done, and it was only then that we discovered we had misunderstood things that had previously seemed obvious. Unfortunately, since this testing was all manual, things did not get any better after this. We continued to need real people running through test scripts to make sure that the application still behaved as expected. Tedious, manual regression testing.

We needed automation – this is how we wanted to improve the regression testing problem. In addition, automating our scripts required us to write code, and the code became hard to follow, even for other developers. This prevented discussions about misunderstandings and different interpretations of the obvious. We needed a solution that made tests automatable but preserved their connection to requirements.

In the early days, **JUnit** required developers to use the word **test** in their method names, and this overemphasized one goal of unit tests (testing) at the expense of other goals, such as design, documentation, and definition of the expected behavior. By giving them a name such as **OrderTest**, they become detached from the business requirement as soon as the test has been completed. And, as time goes by, this gap gets bigger and bigger.

Dan North noticed this problem and suggested some practical rules for naming and structuring the test methods to preserve their connection with the requirements (similar problems had been observed by other people, such as Kent Beck with Customer Tests (_Extreme Programming Explained: Embrace Change_), Joshua Kerievsky ([https://www.industriallogic.com/blog/storytest-driven-development-article/](https://www.industriallogic.com/blog/storytest-driven-development-article/)), Ward Cunningham ([http://fit.c2.com/](http://fit.c2.com/)), and Eric Evans (_Domain-driven Design: Tackling Complexity in the Heart of Software_). He also explained that the easiest way to verify whether our tests expressed the expected behavior was to show them to business representatives. However, business people rarely read source code, so he developed a small tool that performed a few simple transformations to make the test results business-readable.

He called this concept **Behavior Driven Development** (**BDD**) ([https://dannorth.net/introducing-bdd/](https://dannorth.net/introducing-bdd/)), intentionally removing the word **test** to encourage business people to remain engaged throughout the process. BDD helps maintain a connection between the requirements and the software, and, as such, acts as a bridge. Gojko Adzic even called his first book _Bridging the communication gap_ (Adzic, Gojko. Bridging the Communication Gap: Specification by Example and Agile Acceptance Testing. London: Neuri, 2009. Print.).

The bridge is made out of _examples_. Every test is an example. Each example is an expression of a required system behavior. If you have sufficient examples, you define the behavior of the system, and you document the requirements. Business people remain engaged because the examples are expressed in business language. Fast feedback is preserved because the examples are automated.

These examples are often written using the _Given_, _When_, and _Then_ keywords introduced by Chris Matts ([https://theitriskmanager.wordpress.com/about/](https://theitriskmanager.wordpress.com/about/)) and called _scenarios_:

**Scenario**: Allow address change while the order is in preparation

**Given** the client's order is currently **in preparation**

**When** the client changes the delivery address

**Then** the change should be accepted

**And** the new address should be set as the delivery address

The scenarios represent the requirement details, and they are formal enough to be executed by a computer in order to give feedback about the implementation. Teams sometimes write their own tools to support this, but there are several freely available BDD tools that make this simple, such as **SpecFlow** ([http://www.specflow.org](http://www.specflow.org)) and **Cucumber** ([http://cucumber.io](http://cucumber.io)):

![Figure 1.2: Scenarios link requirements to software
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_02.jpg)

###### Figure 1.2: Scenarios link requirements to software

The bridge built with the examples has been ignored by software developers for decades (Brian Marick was an early exponent of examples: [http://www.exampler.com/old-blog/2003/08/22/#agile-testingproject-2](http://www.exampler.com/old-blog/2003/08/22/#agile-testingproject-2)). Agile itself didn't address this directly, but BDD does. As Matt Wynne said ([https://www.youtube.com/watch?v=ReEkLYoXjK8](https://www.youtube.com/watch?v=ReEkLYoXjK8)), "BDD can save your agile." In short, BDD is the missing link.


How Does BDD Work?
------------------

Examples (and their formalized representation – scenarios) play a critically important role in BDD. To understand how BDD works, let's have a look at the way that these scenarios are created and how they drive the development process.

BDD is typically used in agile projects, and the requirements are discovered using user stories that the team discusses throughout the project. Defining and prioritizing good user stories is an exciting challenge in itself. There are many good methods you can use, such as impact mapping or story mapping, but they are not directly related to BDD and are therefore beyond the scope of this book. BDD kicks in when the details of the user stories are discussed by the team for the first time (see _Chapter 4_, _Who Does What and When_).

In a project following the BDD approach, we collect and discuss examples while working with a user story. We use these examples to explore and illustrate the expected behavior of the business domain.

User stories are typically broken down into acceptance criteria or business rules, but they are often subject to misunderstandings. Focusing on examples makes the intention of these rules clear—each rule should be _illustrated_ by one or more examples. However, examples also enable us to _explore_ our understanding of a rule. Exploration often leads to the discovery of complexities and assumptions that otherwise would not be found until much later in the development process.

In _Chapter 2_, _Structured Conversation_, we show in more detail what these examples look like and how you can facilitate requirement workshops to discover them. For now, let's say that examples are concrete usage descriptions of how the application or one of its features should behave. The better the examples you collect during the requirement workshop, the easier it will be to deliver the project successfully using BDD.

Examples can take various forms. They can appear as input-output data pairs, sketches of the user interface, bulleted lists of different steps of a user workflow, or even an Excel workbook illustrating a calculation or a report. The only thing that is common to all examples is that they describe a behavior as a combination of _context_, _action_, and _outcome_, which we'll describe in detail in _Chapter 3_, _What Is an Example?_

Once the user story is prepared and discussed with the team, the development phase starts. Using BDD, teams implement the expected behavior that was illustrated by the examples. In order to use the examples to drive the development, we _formulate_ some of them into scenarios. The scenarios can be considered part of the code base of the application because they are used to verify a specific version of the application. BDD tools turn these scenarios into executable tests _before_ the related behavior has been implemented in the application itself.

#### Seb's Story: Formulation

When I first started working with Gaspar, I wondered why he kept using the word "formulate". It's not a term used by software professionals in general, or BDD practitioners in particular. He explained that it was the best word that he had found to describe the process of turning concrete examples into business-readable documentation. I was pretty sure there must be a better word, so I went away to try to think of one.

I tried substituting "translate", but there's a lot of creative energy required to write a good BDD scenario. "Translate" didn't do it justice, nor did "convert".

The Merriam-Webster dictionary defines "formulate" as _to put into a systematized statement or expression_. This is an accurate description of what we do when we convert examples into scenarios. This is an important task that is uniquely focused on by BDD practitioners, and it does deserve a precise name. _Formulation_ is ideal!

With TDD, we drive the application development by writing a test first—one that initially fails. Then, we implement the application so that the test passes. After a code cleanup (refactoring), we can move on to the next test. This cyclic development flow is illustrated in _Figure 1.3_:

![Figure 1.3: The TDD cycle
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_03.jpg)

###### Figure 1.3: The TDD cycle

BDD drives the development in a very similar way, although the scenarios are often expressed at a higher level. We start by writing a new scenario that should initially fail. Then, we iteratively implement the automation and application code until the scenario finally passes. After cleaning up the code base (refactoring), we can move on to the next scenario.

BDD does not replace TDD. Teams who use BDD often use TDD to ensure the quality of the inner structure of the application. _Figure 1.4_ shows the BDD cycle and how it fits the TDD loop:

![Figure 1.4: The BDD cycle
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_04.jpg)

###### Figure 1.4: The BDD cycle

An executable BDD scenario provides useful feedback for the entire team, including business representatives:

*   It gives feedback about the implementation's correctness for the developers.
*   It gives feedback about the solution for the product owner.
*   It describes the implemented behavior, helping business analysts to understand existing functionality.
*   It gives a signal for the manual, exploratory testers that a feature is ready for testing.
*   It provides a safety net for the developers, identifying any unwanted side effects of changes.
*   It provides detailed documentation relating to the application for the support team.
*   It defines a domain language that is understood by everyone.


What About Testing?
-------------------

We mentioned earlier that the word **test** had been intentionally left out from the BDD name. The aim was to achieve better engagement with business representatives. When first hearing about BDD, many testers have concerns about how it will affect their role, responsibilities, and position.

BDD does not replace classic testing and testing skills. In fact, BDD does not define how testing should be performed. Instead, it provides a set of practical guidelines that facilitate the _agile testing process_. The basic concept of agile testing is to move the responsibilities of testing from finding and reporting application issues to ensuring that these issues are never added to the code base in the first place.

It's a little bit like the relationship between catching criminals and crime prevention. Crime prevention is a much nicer and cheaper way of ensuring security, but it does not replace the presence of police on the streets. The same happens with testing in a BDD project. Testers are involved in all project requirement discussions to help prevent bugs. Later on, they will still work on verifying the correctness of the product created – catching bugs.

A significant proportion of defects (J.-C. Chen and S.-J. Huang, "An empirical analysis of the impact of software development problem factors on software maintainability," Journal of Systems and Software, vol. 82, pp. 981-992, June 2009.) are rooted in problems that arise from misunderstood requirements. Misunderstandings can arise for many reasons: language barrier issues, unspecified combinations, ambiguous domain terms, or different interpretations of common sense. Testers can help by pointing out inconsistencies, identifying examples, or considering edge cases while a user story is being discussed. Testers can also give support by evaluating approaches to testing new features.

Not all defects are eliminated during these discussions. Verification remains critical, though it does become slightly different. Due to the high level of automation, less time is spent on manual regression testing and more on exploratory verification. The latter needs a much broader sense of correctness, which can be ensured only by a human. This kind of verification is usually done through _exploratory testing_. The change of focus described above leads to better integration of testers into the team.


A Language That Is Understood By Everyone
-----------------------------------------

Robert C. Martin, alias Uncle Bob, has said that a software project cannot be successful without the development team becoming domain experts at some level. You can write good software only for problems that you understand. Anything else works only for the short term. When you decided to work as an IT professional, you probably did not expect to require deep knowledge of heavy-duty construction equipment or sports event broadcasting.

Whenever you join a project, you will certainly become familiar with its business domain. At the end of the day, this makes our job more interesting. We should see every project as a voyage of discovery.

#### Gaspar's story: Find the right words

I was renovating the roof of our terraced house and had to go to the plumbing shop to buy a few missing items. I knew what I needed because I had already seen hundreds of gutters. Nevertheless, the first five minutes were spent explaining what I wanted and discovering what the name of that "thing" was. We even needed to draw some sketches. Once we agreed on what the "thing" I wanted was called, they could serve me quickly. It was even in stock!

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_05.jpg)

Figure 1.5: Gutter things

Software projects have the same challenges. A rough understanding of the project's business domain is usually not enough to provide a precise solution. We have to define a language in which the customer can explain their problems in detail, and in which we also can explain the solution we are going to provide. A language that is understood by everyone. Eric Evans uses the term **Ubiquitous Language**  ([http://martinfowler.com/bliki/UbiquitousLanguage.html](http://martinfowler.com/bliki/UbiquitousLanguage.html)) for this in domain-driven design.

The team writes scenarios using this language. If we use these scenarios to drive our implementation, the model we create for the solution will remain close to the business domain. This, in turn, helps keep our software easy to understand and maintain.


Living Documentation
--------------------

If you have heard about BDD, you have probably stumbled across the term _living documentation_. This is a kind of documentation that never gets outdated, or at least you will be immediately informed when it does.

It is easy to see that the scenarios make up a kind of living structure because we can always verify whether a scenario is supported by the application or not. If it is supported, the scenario passes. If not, the scenario fails. Thanks to the ubiquitous language, even business representatives will immediately know which expectations may not be fulfilled by our solution.

It is harder to see how these scenarios can be used as documentation. The target users of this kind of living documentation are the business representatives of the project and the development team (including testing, operations, and support). Scenarios are written in a language that uses domain-specific terms to describe the behavior of the application. As such, they are readable by, and interesting to, domain experts, but not necessarily for end users. Therefore, the scenarios are not a replacement for end user documentation or online help.

Scenarios are most useful when someone needs to check how the system works in specific situations: "Is an 'OR' search supported?", "Can our system handle zero interest rates?", "What happens if multiple users attempt to change the same order?" We could answer these questions by trying them out on a test installation, but that might require complex setup steps that take a lot of time and effort.

If you are planning a new feature and would like to know its impact on the system, or if you are on a support call, you can search for a few keywords in the living documentation. The scenarios found will describe the current behavior of the system, providing you with the information you were looking for.

The success of using scenarios as living documentation mainly depends on whether you can make it accessible for the target audience in a convenient way. It is hard to imagine that a business analyst will open Visual Studio, do a Git pull, find the scenarios that they are interested in, and read them as a plain text file. Fortunately, there are several tools that can help with this, thanks to the Gherkin open specification format ([https://github.com/cucumber/gherkin](https://github.com/cucumber/gherkin)) used by the scenarios shown in this book. Make sure you check out **Cucumber Pro** ([https://cucumber.io/pro](https://cucumber.io/pro)), **Pickles** ([http://www.picklesdoc.com/](https://www.relishapp.com/)), **Relish** ([https://www.relishapp.com/](https://www.relishapp.com/)), **SpecFlow+ Runner** ([http://www.specflow.org/plus/runner/](http://www.specflow.org/plus/runner/)), and **SpecLog** ([http://www.speclog.net/](http://www.speclog.net/)), to name a few.


What Is BDD, Then?
------------------

BDD is an agile approach that consists of three practices that have to be addressed in order. The first practice is _discovery_, a structured, collaborative activity that uses concrete examples to uncover the ambiguities and misunderstandings that traditionally derail software projects.

The second practice is _formulation_, a creative process that turns the concrete examples produced during discovery into business-readable scenarios. A subsequent review of the scenarios delivers the confidence that the team really has understood what the business is asking for.

The third, and final, practice is _automation_, where code is written that turns the scenarios into tests. The benefits of automation are many and varied:

*   When the tests pass, the development team can be confident that they have delivered what the business has asked for.
*   The tests give the development team a safety net when the time comes to modify the code.
*   The tests form living documentation of how the system behaves, which is readable by the business and is guaranteed to be up to date:

![Figure 1.6: BDD practices
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_01_06.jpg)

###### Figure 1.6: BDD practices

Many development teams come to BDD through the desire to improve their test automation. Improved test automation **is** one of the significant outcomes of following a BDD approach, but it is a _downstream_ outcome. Unless you adopt the practices in the order described (_discovery_, _formulation_, _automation_), you will not gain the expected benefits.

Conversely, you will achieve significant improvements in your software development activities just by practicing _discovery_ on its own. Add _formulation_ and you'll get the extra benefits that come from growing a truly ubiquitous language through an active review and feedback process.

And finally, creating an extra, business-language layer of automated tests is expensive – you'll only get a good return on your investment if you successfully engage the business team members. So, don't focus on the automation tools ([http://lizkeogh.com/2014/01/22/using-bdd-with-legacy-systems/](http://lizkeogh.com/2014/01/22/using-bdd-with-legacy-systems/)) until you've got good at collaborating across the team.


What We Just Learned
--------------------

In this chapter, you've been on a whirlwind tour of BDD. There's a lot going on!

We started by describing the challenges that BDD was created to address – the failures caused by misunderstandings within a project team. We showed how examples (and the scenarios that we formulate from them) make an excellent bridge between business requirements and technical specifications, effectively flushing out ambiguities.

These scenarios, written in the project's ubiquitous language, act both as documentation and as tests. As documentation, they close the feedback loop between the business and delivery team members, demonstrating the successful communication of ideas. As tests, they show that the solution being developed is meeting the business requirements, as well as acting as a valuable safety net that will provide confidence whenever changes need to be made to the software. Finally, once the scenarios are automated, there's a further benefit: documentation that demonstrably describes the actual functionality provided by the software.

We also discussed the relationship between BDD and testing. They are related, but distinct. The focus of BDD is collaboration, leading to clear requirements understood by the whole team. The examples make great test cases and (once formulated) documentation, so there is definitely testing going on. However, the purpose is to assure all concerned that development is progressing in the correct direction, not to confirm exhaustively that the correct code has been written. This is still covered by the professional practices of developers and testers—that is, developers writing automated programmer tests, and testers verifying the solution using scripted and exploratory testing.

The remainder of this book digs deeper into the collaborative, _discovery_ practice, and how to fit it into your project's process.


Chapter 2. Structured Conversation
==================================

Introduction
------------

In this chapter, we are going to peer into the daily work of a software product team to learn more about how they use structured conversations to help them discover what the expected behavior of the next feature should be. We'll start by describing one of their requirement workshops. This will introduce concepts that you're not familiar with, but don't worry: all your questions will be answered later in the chapter.

Where Is My Pizza?
------------------

The team we will be visiting is developing a pizza delivery management application for a large pizza company. The application will allow clients to track the real-time location of their order(s), so they have come up with a fun name for the application: "Where is my pizza?" Some joker on the team noticed that this abbreviates to WIMP, "_a weak, cowardly, or ineffectual person_" (_Merriam-Webster_). The rest of the team still know that the product will be awesome.

There are lots of other exciting features, too, but for the rest of this book, we'll be considering a client's ability to modify the delivery address of an order after the order has been submitted.

A Useful Meeting
----------------

It's 9 a.m. on Wednesday morning and the team is assembling in the team room for another _requirement workshop_. There's a good turnout today – Patricia (the Product Owner), Dave and Dishita (from Development), Tracey (from Test), and Ian (the new intern).

#### Requirement workshop

The team meets regularly (usually several times a week) to discuss the work that they'll be undertaking in the next sprint or two. The purpose of this meeting is to explore a story, understand its scope, and illustrate it unambiguously with concrete examples. While they're doing this, they may discover new details about the story. They may also ask questions that no one at the meeting is able to answer right away.

What matters most in this meeting is bringing diverse perspectives together so that the team can learn about what needs to be done and work together more effectively. In other organizations, similar meetings have been variously called _three amigos meetings_, _discovery workshops_, _specification workshops_, _story refinement_, _product backlog refinement_, and _backlog grooming_ – as always, the name is less important than the purpose.

They're very comfortable with this meeting format because they meet several times a week for short, focused sessions that often concern only a single user story. The idea came from a blog post by Matt Wynne, _Introducing Example Mapping_ ([https://cucumber.io/blog/2015/12/08/example-mapping-introduction](https://cucumber.io/blog/2015/12/08/example-mapping-introduction)), that Dishita has recently read.

Patricia grabs the box of colored index cards and marker pens from the stationery cupboard and puts the lot in the middle of the table. Everyone knows which story Patricia has been preparing because she sent out an email yesterday. Patricia reads out the story that is going to be discussed:

In order to fix an incorrect delivery address,

As a client,

I want to be able to change the delivery address after the order has been placed.

Dishita summarizes this on a yellow index card:

![Figure 2.1: Story card on the table
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_01.jpg)

###### Figure 2.1: Story card on the table

"The system will need to be able to check whether it's possible to change the delivery address" says Patricia. "We'll have to check that the new address is not too far from the current one. And we'll need to check the state of the order, too."

"This will be easy" says Dave, and they all smile. They have heard this sentence many times before.

"We'll see," answers Tracey, "let's try to come up with a few examples!" And the workshop begins.

#### Note

Explaining a team discussion in a book is hard because you need to keep track of the goals and perspectives of many people with different roles and backgrounds. To make it easier to follow, we have chosen the names of our team members so that their initials describe their role. Patricia is the Product Owner, Dave and Dishita are Developers, Tracey is a Tester, and Ian is an Intern from the university.

As we mentioned in the _What is BDD, then?_ section in _Chapter 1, What Is BDD?,_ one typical mistake is to look at BDD as a tool. A similar mistake would be to think of BDD as a mechanical process, such as filling out a Given/When/Then template. We need all team members to actively challenge their understanding of the user story by coming up with concrete examples.

There are many ways you can organize your team for better collaboration. Every team and every project is different. We are going to focus on a technique called **Example Mapping** that is a simple and efficient way to facilitate your requirement workshops. This is one technique for carrying out a structured conversation, and it has worked very well for us, but you may need to find an alternative that is more suited to your context. Before you do, refer to _Chapter 4, Who Does What and When_, where we will show how requirement workshops can fit into an agile project following Scrum, Lean/Kanban, or even into a fixed-scope project with distributed teams.

So, let's get back to our team.

Collecting Examples
-------------------

"Let's start with the happy path, where the customer should be allowed to change the delivery address... and see if it's as easy as Dave thinks it will be. What would be a typical example of this?" asks Tracey.

"Yes, this is the case where the order is in preparation," starts Patricia. Tracey, who volunteered to facilitate the meeting today, takes a green card and writes **Order is in preparation** at the top of it.

"Which persona shall we use to describe this example?" asks Patricia, and they all look at the wall where posters of different user types, called _personas_ ([https://en.wikipedia.org/wiki/Persona\_(user\_experience)](https://en.wikipedia.org/wiki/Persona_(user_experience))), are displayed. The team introduced the personas a year ago when Ulla, the UX expert, joined the company.

"Let's use Peter! He regularly orders pizzas at home and at the office. He probably gets the delivery address mixed up from time to time," suggests Dishita.

"OK. So, let's say that Peter is in the office, but orders a Margherita pizza for home by mistake. The order has been placed and the restaurant starts to prepare it. He checks his emails a few minutes later and realizes he's used the wrong address. He clicks on the tracking link from the email and chooses **Change Address** on the tracking page. He selects the work address and submits the changes. The change is accepted," explains Patricia.

"What do you mean by a few minutes later?" asks Dishita.

"The order has just been received, so the pizza isn't ready yet," answers Patricia.

"Ah, OK. So, the pizza might be in the oven, but it's not ready for delivery?" checks Tracey.

"Yes, that's right," replies Patricia.

While she is explaining the details, they all look at the printed UI wireframes for the new **Update Address** page, to help them follow the example easily. Tracey captures the important steps on a green card:

![Figure 2.2: The first example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_02.jpg)

###### Figure 2.2: The first example card

The team members are all following Tracey as she captures these steps so that they can verify whether the details have been captured properly.

"Is it 'not ready' or 'in preparation' that we have to watch for?" asks Ian. "We use one in the example title and the other in the second step of the example."

"Those two states mean essentially the same thing," answers Dave. "If the pizza is in preparation, then it's obviously not ready."

"We just learned about state diagrams in our **UML** (**Unified Modeling Language**) module at university. Is that something we could use here?" asks Ian.

Dishita grabs a pen and stands at the whiteboard. "We don't need a full UML state diagram, but I think an overview of the states would be useful, as well as some of the events." It takes a few minutes to come up with a state diagram, similar to this one:

![Figure 2.3: State diagram of the pizza process
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_03.jpg)

###### Figure 2.3: State diagram of the pizza process

"Then why don't we let them change the address until the delivery person picks up the pizza?" asks Tracey. They all look at Patricia.

"That's a good point, Tracey. Actually, the important turning point is when the delivery person picks up the order. This is when they check the delivery address and plan the route," concludes Patricia.

"OK. I'll fix the example card," says Tracey, and changes the card to look like this:

![Figure 2.4: The corrected example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_04.jpg)

###### Figure 2.4: The corrected example card

"Is everybody happy with this?"

Everyone nods, so she places the card below the story card on the desk. "What rule is this example illustrating?"

"'Allow address change if not picked up yet'", replies Patricia, and she picks a blue card, writes this rule on it, and places it above the green card:

![Figure 2.5: The first rule in the example map
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_05.jpg)

###### Figure 2.5: The first rule in the example map

"What other examples can we imagine for this rule? Is there a counter-example?" Tracey helps to move the meeting forward.

"Sure! If the order has already been picked up, we should respond with a big fat error message," Dave replies promptly and smiles. "Easy..."

Everyone tries to imagine the situation...somehow it feels wrong. Dishita finally comes up with an example.

"Let's look at our other persona, Tim. He is a first-time buyer, so he has to type in the delivery address. What if he makes a small mistake? I once mixed up the house number in one of my orders and only realized it when I got hungry and checked the notification email."

"But we can't just let them change the address to a completely different location when the pizza is already at the doorstep of the original delivery address," says Patricia.

They start a discussion about possible options, but the discussion gets stuck. "There are lots of ways we could handle a late change of delivery address, but none of them are simple. Do we really need to do this now?" asks Dave.

"It looks like we can't solve this now. Let's make a red card for it, and check the statistics to see how often this happens and how much extra cost is caused by this sort of mistake," Tracey suggests.

They all agree, so she takes a red card and summarizes the problem. They use the red cards to track questions or other discussion points that they cannot solve immediately. They place the red cards on the desk so that everyone can see them. This way, they can avoid endless discussions about the topic.

"Can we come up with a temporary workaround for the problem?" asks Tracey once she has finished writing down the question.

"Maybe we could change the error message to advise the users to call the operator," suggests Ian.

"Very good! Let's capture that quickly before we forget!" replies Patricia, and they capture another example and place it under the previous one:

![Figure 2.6: The second example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_06.jpg)

###### Figure 2.6: The second example card

![Figure 2.7: A counter-example and a question
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_07.jpg)

###### Figure 2.7: A counter-example and a question

They all look at the examples to see how the system will behave in the different situations.

"There's another one!" cries out Tracey. "What if the pizza was picked up while Tim was typing in the new address in the address change screen?"

The team realizes that this illustrates the need for state verification both when the address change screen is opened and when the change is submitted. This means that even though it's an edge case, it's important enough to capture it as a third example of the rule:

![Figure 2.8: The third example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_08.jpg)

###### Figure 2.8: The third example card

They cannot come up with any further relevant examples, so they move on.

"Is this what you call 'easy,' Dave?" asks Patricia.

"Well... at least we've learned a lot about the address change process," acknowledges Dave.

The team then discusses other business rules, such as **Only valid address is accepted**, **ETA is updated**, and **New address should be in range**. They come up with examples for all these rules and lay them on the desk.

The workshop finishes in about half an hour. Tracey takes a photograph of the example map (_Figure 2.9_) and everyone goes back to their desks.

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_09.jpg)

###### Figure 2.9: The final example map

Deliberate Discovery
--------------------

Developing software is a learning process. I've never met a team that, after they deliver some working software, says "if we were to do that again, we'd do it exactly the same way." That's because, in the course of developing the software, they discover things that they didn't know at the beginning.

Discovery that happens while you're developing software can be thought of as "accidental discovery"— it may upset your schedule, or even derail or interrupt your roadmap entirely. The discovery that happens during a requirement workshop is _deliberate discovery_. The meeting is convened with the almost certain knowledge that there are things that we don't know. We deliberately explore our understanding of the requirements using concrete examples and, more often than not, we are rewarded by learning things. The alternative is that the learning happens accidentally after the delivery team has already started developing the solution.

While our team was discussing the "allow delivery address change" requirement, examples turned out to be very useful. The rule started off looking really simple, but when they started coming up with examples to illustrate the rule, they found that they didn't have a shared understanding of the possible states of an order. They cleared this up with a state diagram, which ultimately led to them modifying the rule to **Allow address change when order not picked up**.

The next example dug into what should happen when the order has been picked up, which has implications for the UX. The team came up with a simple solution and wrote out a question card to be answered by the business. This naturally led them to think about what should happen if the order is picked up while the address change is being requested, and they discovered another important behavior.

Examples are used both to illustrate what we already know and to force us to question our assumptions. They underpin the deliberate discovery conversation.

Example Mapping In A Nutshell
-----------------------------

"_Example Mapping is a simple, low-tech method for making conversations short and powerfully productive_." – Matt Wynne

The **Example Mapping technique** ([https://cucumber.io/blog/2015/12/08/example-mapping-introduction](https://cucumber.io/blog/2015/12/08/example-mapping-introduction)) was discovered/invented by Matt Wynne, who regularly facilitates requirement workshops for his customers. At one of his workshops, he had a pack of index cards in four different colors with him. He used the green cards to capture examples and grouped them by rules, which he wrote on blue cards. He discovered that arranging these cards as a map helps guide the discussion and gives a good visual overview of the requirements.

When participating in an Example Mapping workshop, we capture different artifacts on differently colored index cards or post-it notes:

*   _Examples_ are captured on **green cards**— they illustrate the concrete behavior of the system.
*   _Rules_ are written on **blue cards**— these are logical groupings of the examples and usually focus on a particular condition. Many teams call these **acceptance criteria** (**AC**), **business rules**, or simply **requirements**.
*   _Questions_ or _assumptions_ are captured on **red cards**— these are any topics that would block the discussion. Since these are visible to everyone, we can avoid re-discussing these (usually frustrating) topics again and again.
*   _User stories_ are captured on **yellow cards**— we usually start discussing a single user story, but as we dig into the details, we often decide to split the story into smaller stories and postpone some of them.
    
    #### Seb's story: Business rules, requirements, acceptance criteria
    
    When my teams start discussing a user story, what they typically want to understand is the scope of the story and how difficult it might be to implement. Examples really help us understand how the story is supposed to behave, but we want them in related groups. These groupings have been called different things by different teams: business rules, acceptance criteria, requirements. Each of the terms comes with its own baggage and often hampers communication in the team. Instead, we've started just calling them rules— they're abstract statements that describe a single aspect of behavior. An added bonus is that when it comes to splitting a story, we can often split it simply by moving some rules (and their associated examples) to a new story.
    

We place the story card on the top row and arrange the rules in a row underneath. The examples belonging to a particular rule are placed below the rule card they relate to. We put the red cards to the side of the example map. At the end of the discussion, the desk should look like _Figure 2.9_.

#### Gaspar's story: Rejoining a discussion

We have all been in meetings where a notification on our phone or some other interruption distracts our focus. Once you fall out of an animated discussion, it is very hard to get back into it. This kind of problem can be minimized by establishing a better meeting culture, but it cannot be avoided completely. So, we'd better accept that this might happen and create an infrastructure that helps people get back into the discussion as quickly as possible. Having a visual map (or a mind map) that is visible to everyone makes it easier to see the big picture and see the details at the same time.

The example cards will be used later when we come to write our scenarios. It does not matter what format you use to write examples as long as you capture all the details that seemed important in the discussion. For example, even if you use Cucumber, you should not use Given/When/Then to write your examples.

When we have captured an example, we give it a title so that we can refer to it easily. One simple way of coming up with a title is to copy the way that episodes of the _Friends_ sitcom were named: "_The One Where Rachel Finds Out_." The words you put after "_The One Where ..._" happen to be very good titles for our examples: "_The One Where the Order Has Been Picked Up Already_".

There's no strict order you should collect the examples and the rules in. If the story is simple or well prepared, it will probably arrive with an initial set of rules (or AC). In this case, it makes sense to go through these rules and understand their details by creating examples that illustrate each of them.

In other situations, where the story is vaguer, it might make sense to come up with some examples that describe the typical behaviors that will be expected. Then, identify the rules that govern them.

No matter how you do it, it is practical to nominate a **facilitator**, who keeps the meeting going. The facilitator ensures that the discussion is captured on the cards and that everyone agrees with the form in which they have been written down. The facilitator is not a special role; anyone in the team can do it. We recommend you rotate this role across all team members.

With **Example Mapping**, you can discuss detailed requirements in a surprisingly short time. In many cases, the details of a user story can be discussed in 20-30 minutes. We've found that this style of workshop can work for teams no matter what flavor of agile they're using, as we discuss in _Chapter 4, Who Does What and When_. Because the workshops are short, we can run them several times a week.

Once the map has been created, it is important not to lose this information. Some teams take photos and share them with team members. Others pin the cards on a pinboard in the team room or save the information as a mind map.

How To Establish Structured Conversations
-----------------------------------------

Regardless of whether you use Example Mapping or another technique, structuring the conversations will help your requirement workshops be more focused and efficient. It's time to define exactly what we mean by **structured conversation**. A structured conversation is a facilitated exchange of ideas that conforms to a predefined form. In the context of a requirement workshop, a structured conversation exhibits the following properties:

*   **Collaborative**: All attendees participate actively.
*   **Diverse perspectives**: We need a Three Amigos meeting.
*   **Short**: We want regular workshops so that the learning feedback loop stays fast.
*   **Progressive focus**: We capture the progress of the workshop in real time, allowing the discussion to move forward quickly.
*   **Consensus**: Agreed concrete examples are the measure of the workshop's success.

**Collaborative**

The conversations should include the entire team and encourage them to collaborate actively. In many agile projects, the term **collaboration** means nothing more than inviting everyone to a planning meeting at which the product owner explains the requirements, and everyone else listens. We need more bi-directional communication.

#### Gaspar's story: Help them participate in the discussion!

Once, a member of my team asked me an important question after the meeting finished. "This is a pretty important question! Why didn't you ask the PO during the meeting?" I asked, trying to hide my emotions. "Because I wasn't sure I understood everything and I thought my question might have been answered anyway," he responded. I was pretty frustrated about this, and other similar situations, and I was dreaming of a team consisting of communicative, active superheroes asking questions frequently. Soon afterward, I was invited to a non-IT discussion, where neither the topic nor the language was well known to me. I feared that I would not be able to participate properly in the discussion. The organizer helped me out by giving me a handout that contained the agenda, the discussion points, and a few important sentences. Without these, I might have looked dumb, but instead, I was able to participate in the discussion. Impressed by this experience, I revised my attitude to teamwork. Identifying the root causes of communication problems and figuring out how to solve them is far better than dreaming of perfection and whining when you can't achieve it. Working with an all-superhero team must be really boring.

Everyone has a slightly different personality. You should establish a culture where everyone can participate, regardless of their personality. By using a method that requires people to stand up and move, talk to each other, and arrange/annotate colored cards, we can exercise different senses, so everyone can contribute in the areas that they feel most comfortable with. For distributed teams, the possibilities are more limited, but with a few smart ideas, the same efficiency can be achieved (see more on this in _Chapter 4, Who Does What and When_).

**Diverse perspectives**

We uncover ambiguities by organizing requirement workshops where the representatives of diverse perspectives (business, test, and development) come together. These meetings are sometimes called _Three Amigos_ ([https://www.infoq.com/interviews/george-dinwiddie-three-amigos](https://www.infoq.com/interviews/george-dinwiddie-three-amigos)) meetings. Despite the name, the point is not that there should be only three people in the room.

In your team, there might be other roles as well (such as UX), or you might invite multiple representatives of the same role. What makes these meetings powerful is that the representatives of the different roles can challenge their understanding of the requirements at an early stage. Even though they are all talking about the same requirement, each person has their own perspective:

*   The business representative focuses on the fulfillment of the business goals, for example, when Patricia agrees that the address can be changed before the order is picked up.
*   The developers explore the technical implications of the feature, for example, when Dave concludes that all solutions for a late change of delivery address will introduce costly complexities.
*   The testers can challenge the feasibility of testing the feature and help identify special corner cases, for example, when Tracey noticed that the order might be picked up while the client was changing the delivery address.

**Short**

We suggest that requirement workshops should be no longer than 30 minutes. This is because:

*   Long meetings are exhausting— you'll often not get active participation from all attendees throughout the meeting.
*   Long meetings are expensive— multiply the time by the number of people in the room and you'll frequently find meetings that cost a person a whole day.
*   Short meetings can be scheduled more frequently— shorter meetings are less disruptive and are easier to schedule than longer ones.
*   Frequent meetings can vary the attendees— we can improve shared ownership by ensuring that it's not always the same people at the meeting.
*   Frequent meetings reduce the impact of unanswerable questions— we can continue the discussion as soon as we discover the answer.

Your situation may require longer, infrequent meetings, but even then we urge you to structure each meeting in several short, focused sessions.

**Progressive focus**

We start the workshop knowing what we're going to discuss, but we never know quite what we'll discover. However, as the workshop unfolds, we must capture what we learn so that, at the end, we have a full record of our knowledge. Our understanding becomes progressively more complete, while the record allows us to maintain focus on what we still don't understand.

#### Seb's story: Progressive JPEG

I think of a structured conversation as being a bit like a JPEG image downloading over a slow connection. The image becomes progressively more and more detailed. Early on, you can often guess what it's an image of, but it's not until it finishes downloading that you can see the picture in its full glory.

For our conversation to keep focused while our understanding develops progressively, we need to:

*   Know what we're meeting about—Patricia emailed out the story for discussion the day before.
*   Capture our understanding as it develops—the format is not important, but it must be low friction and captured continuously.
*   Be able to quickly grasp the state of the discussion by capturing our understanding in a form that is readable by everyone, such as an example map.
*   Stop discussions that aren't going anywhere, for example, by capturing unanswerable questions rather than discussing them fruitlessly.

**Consensus**

We know we have achieved consensus when we agree:

*   That the output is correct— the output may not be complete, but everything in it must be agreed by everybody.
*   Whether the feature is sufficiently understood— if it is, then it needs no further discussion and development can proceed.
*   That there is no hidden/private knowledge— the content of all conversations is captured in the output and there is no need to consolidate private notes, email chains, and so on.
*   Who is responsible for answering each remaining question— capturing questions is a great way to keep the discussion moving, but someone needs to ensure that they get answered.

What We Just Learned
--------------------

Software development is a learning process. The more we can learn about the problem, the easier solving it becomes. This process can be made more effective by having several team members (with different perspectives) analyzing the requirements together _before they start developing the software_. These collaborative requirement workshops are most productive if they are kept short and run regularly throughout the project— often several times a week.

There are many structured conversation techniques that have been used to facilitate these requirement workshops, but the most useful that we have come across is Example Mapping, as described by Matt Wynne. It's simple, well documented, and results in a visual record of the conversation that clearly communicate the agreements that were reached, as well as the questions that remain unanswered. This, in turn, makes it easier for those who weren't at the meeting to understand the issues and provide useful feedback.

All software development projects depend on well-understood requirements, but the approach described here works particularly well for the lightweight agile and lean methods that are in common use today.


Introduction
------------

In this chapter, we are going to peer into the daily work of a software product team to learn more about how they use structured conversations to help them discover what the expected behavior of the next feature should be. We'll start by describing one of their requirement workshops. This will introduce concepts that you're not familiar with, but don't worry: all your questions will be answered later in the chapter.


Where Is My Pizza?
------------------

The team we will be visiting is developing a pizza delivery management application for a large pizza company. The application will allow clients to track the real-time location of their order(s), so they have come up with a fun name for the application: "Where is my pizza?" Some joker on the team noticed that this abbreviates to WIMP, "_a weak, cowardly, or ineffectual person_" (_Merriam-Webster_). The rest of the team still know that the product will be awesome.

There are lots of other exciting features, too, but for the rest of this book, we'll be considering a client's ability to modify the delivery address of an order after the order has been submitted.


A Useful Meeting
----------------

It's 9 a.m. on Wednesday morning and the team is assembling in the team room for another _requirement workshop_. There's a good turnout today – Patricia (the Product Owner), Dave and Dishita (from Development), Tracey (from Test), and Ian (the new intern).

#### Requirement workshop

The team meets regularly (usually several times a week) to discuss the work that they'll be undertaking in the next sprint or two. The purpose of this meeting is to explore a story, understand its scope, and illustrate it unambiguously with concrete examples. While they're doing this, they may discover new details about the story. They may also ask questions that no one at the meeting is able to answer right away.

What matters most in this meeting is bringing diverse perspectives together so that the team can learn about what needs to be done and work together more effectively. In other organizations, similar meetings have been variously called _three amigos meetings_, _discovery workshops_, _specification workshops_, _story refinement_, _product backlog refinement_, and _backlog grooming_ – as always, the name is less important than the purpose.

They're very comfortable with this meeting format because they meet several times a week for short, focused sessions that often concern only a single user story. The idea came from a blog post by Matt Wynne, _Introducing Example Mapping_ ([https://cucumber.io/blog/2015/12/08/example-mapping-introduction](https://cucumber.io/blog/2015/12/08/example-mapping-introduction)), that Dishita has recently read.

Patricia grabs the box of colored index cards and marker pens from the stationery cupboard and puts the lot in the middle of the table. Everyone knows which story Patricia has been preparing because she sent out an email yesterday. Patricia reads out the story that is going to be discussed:

In order to fix an incorrect delivery address,

As a client,

I want to be able to change the delivery address after the order has been placed.

Dishita summarizes this on a yellow index card:

![Figure 2.1: Story card on the table
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_01.jpg)

###### Figure 2.1: Story card on the table

"The system will need to be able to check whether it's possible to change the delivery address" says Patricia. "We'll have to check that the new address is not too far from the current one. And we'll need to check the state of the order, too."

"This will be easy" says Dave, and they all smile. They have heard this sentence many times before.

"We'll see," answers Tracey, "let's try to come up with a few examples!" And the workshop begins.

#### Note

Explaining a team discussion in a book is hard because you need to keep track of the goals and perspectives of many people with different roles and backgrounds. To make it easier to follow, we have chosen the names of our team members so that their initials describe their role. Patricia is the Product Owner, Dave and Dishita are Developers, Tracey is a Tester, and Ian is an Intern from the university.

As we mentioned in the _What is BDD, then?_ section in _Chapter 1, What Is BDD?,_ one typical mistake is to look at BDD as a tool. A similar mistake would be to think of BDD as a mechanical process, such as filling out a Given/When/Then template. We need all team members to actively challenge their understanding of the user story by coming up with concrete examples.

There are many ways you can organize your team for better collaboration. Every team and every project is different. We are going to focus on a technique called **Example Mapping** that is a simple and efficient way to facilitate your requirement workshops. This is one technique for carrying out a structured conversation, and it has worked very well for us, but you may need to find an alternative that is more suited to your context. Before you do, refer to _Chapter 4, Who Does What and When_, where we will show how requirement workshops can fit into an agile project following Scrum, Lean/Kanban, or even into a fixed-scope project with distributed teams.

So, let's get back to our team.


Collecting Examples
-------------------

"Let's start with the happy path, where the customer should be allowed to change the delivery address... and see if it's as easy as Dave thinks it will be. What would be a typical example of this?" asks Tracey.

"Yes, this is the case where the order is in preparation," starts Patricia. Tracey, who volunteered to facilitate the meeting today, takes a green card and writes **Order is in preparation** at the top of it.

"Which persona shall we use to describe this example?" asks Patricia, and they all look at the wall where posters of different user types, called _personas_ ([https://en.wikipedia.org/wiki/Persona\_(user\_experience)](https://en.wikipedia.org/wiki/Persona_(user_experience))), are displayed. The team introduced the personas a year ago when Ulla, the UX expert, joined the company.

"Let's use Peter! He regularly orders pizzas at home and at the office. He probably gets the delivery address mixed up from time to time," suggests Dishita.

"OK. So, let's say that Peter is in the office, but orders a Margherita pizza for home by mistake. The order has been placed and the restaurant starts to prepare it. He checks his emails a few minutes later and realizes he's used the wrong address. He clicks on the tracking link from the email and chooses **Change Address** on the tracking page. He selects the work address and submits the changes. The change is accepted," explains Patricia.

"What do you mean by a few minutes later?" asks Dishita.

"The order has just been received, so the pizza isn't ready yet," answers Patricia.

"Ah, OK. So, the pizza might be in the oven, but it's not ready for delivery?" checks Tracey.

"Yes, that's right," replies Patricia.

While she is explaining the details, they all look at the printed UI wireframes for the new **Update Address** page, to help them follow the example easily. Tracey captures the important steps on a green card:

![Figure 2.2: The first example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_02.jpg)

###### Figure 2.2: The first example card

The team members are all following Tracey as she captures these steps so that they can verify whether the details have been captured properly.

"Is it 'not ready' or 'in preparation' that we have to watch for?" asks Ian. "We use one in the example title and the other in the second step of the example."

"Those two states mean essentially the same thing," answers Dave. "If the pizza is in preparation, then it's obviously not ready."

"We just learned about state diagrams in our **UML** (**Unified Modeling Language**) module at university. Is that something we could use here?" asks Ian.

Dishita grabs a pen and stands at the whiteboard. "We don't need a full UML state diagram, but I think an overview of the states would be useful, as well as some of the events." It takes a few minutes to come up with a state diagram, similar to this one:

![Figure 2.3: State diagram of the pizza process
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_03.jpg)

###### Figure 2.3: State diagram of the pizza process

"Then why don't we let them change the address until the delivery person picks up the pizza?" asks Tracey. They all look at Patricia.

"That's a good point, Tracey. Actually, the important turning point is when the delivery person picks up the order. This is when they check the delivery address and plan the route," concludes Patricia.

"OK. I'll fix the example card," says Tracey, and changes the card to look like this:

![Figure 2.4: The corrected example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_04.jpg)

###### Figure 2.4: The corrected example card

"Is everybody happy with this?"

Everyone nods, so she places the card below the story card on the desk. "What rule is this example illustrating?"

"'Allow address change if not picked up yet'", replies Patricia, and she picks a blue card, writes this rule on it, and places it above the green card:

![Figure 2.5: The first rule in the example map
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_05.jpg)

###### Figure 2.5: The first rule in the example map

"What other examples can we imagine for this rule? Is there a counter-example?" Tracey helps to move the meeting forward.

"Sure! If the order has already been picked up, we should respond with a big fat error message," Dave replies promptly and smiles. "Easy..."

Everyone tries to imagine the situation...somehow it feels wrong. Dishita finally comes up with an example.

"Let's look at our other persona, Tim. He is a first-time buyer, so he has to type in the delivery address. What if he makes a small mistake? I once mixed up the house number in one of my orders and only realized it when I got hungry and checked the notification email."

"But we can't just let them change the address to a completely different location when the pizza is already at the doorstep of the original delivery address," says Patricia.

They start a discussion about possible options, but the discussion gets stuck. "There are lots of ways we could handle a late change of delivery address, but none of them are simple. Do we really need to do this now?" asks Dave.

"It looks like we can't solve this now. Let's make a red card for it, and check the statistics to see how often this happens and how much extra cost is caused by this sort of mistake," Tracey suggests.

They all agree, so she takes a red card and summarizes the problem. They use the red cards to track questions or other discussion points that they cannot solve immediately. They place the red cards on the desk so that everyone can see them. This way, they can avoid endless discussions about the topic.

"Can we come up with a temporary workaround for the problem?" asks Tracey once she has finished writing down the question.

"Maybe we could change the error message to advise the users to call the operator," suggests Ian.

"Very good! Let's capture that quickly before we forget!" replies Patricia, and they capture another example and place it under the previous one:

![Figure 2.6: The second example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_06.jpg)

###### Figure 2.6: The second example card

![Figure 2.7: A counter-example and a question
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_07.jpg)

###### Figure 2.7: A counter-example and a question

They all look at the examples to see how the system will behave in the different situations.

"There's another one!" cries out Tracey. "What if the pizza was picked up while Tim was typing in the new address in the address change screen?"

The team realizes that this illustrates the need for state verification both when the address change screen is opened and when the change is submitted. This means that even though it's an edge case, it's important enough to capture it as a third example of the rule:

![Figure 2.8: The third example card
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_08.jpg)

###### Figure 2.8: The third example card

They cannot come up with any further relevant examples, so they move on.

"Is this what you call 'easy,' Dave?" asks Patricia.

"Well... at least we've learned a lot about the address change process," acknowledges Dave.

The team then discusses other business rules, such as **Only valid address is accepted**, **ETA is updated**, and **New address should be in range**. They come up with examples for all these rules and lay them on the desk.

The workshop finishes in about half an hour. Tracey takes a photograph of the example map (_Figure 2.9_) and everyone goes back to their desks.

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_02_09.jpg)

###### Figure 2.9: The final example map


Deliberate Discovery
--------------------

Developing software is a learning process. I've never met a team that, after they deliver some working software, says "if we were to do that again, we'd do it exactly the same way." That's because, in the course of developing the software, they discover things that they didn't know at the beginning.

Discovery that happens while you're developing software can be thought of as "accidental discovery"— it may upset your schedule, or even derail or interrupt your roadmap entirely. The discovery that happens during a requirement workshop is _deliberate discovery_. The meeting is convened with the almost certain knowledge that there are things that we don't know. We deliberately explore our understanding of the requirements using concrete examples and, more often than not, we are rewarded by learning things. The alternative is that the learning happens accidentally after the delivery team has already started developing the solution.

While our team was discussing the "allow delivery address change" requirement, examples turned out to be very useful. The rule started off looking really simple, but when they started coming up with examples to illustrate the rule, they found that they didn't have a shared understanding of the possible states of an order. They cleared this up with a state diagram, which ultimately led to them modifying the rule to **Allow address change when order not picked up**.

The next example dug into what should happen when the order has been picked up, which has implications for the UX. The team came up with a simple solution and wrote out a question card to be answered by the business. This naturally led them to think about what should happen if the order is picked up while the address change is being requested, and they discovered another important behavior.

Examples are used both to illustrate what we already know and to force us to question our assumptions. They underpin the deliberate discovery conversation.


Example Mapping In A Nutshell
-----------------------------

"_Example Mapping is a simple, low-tech method for making conversations short and powerfully productive_." – Matt Wynne

The **Example Mapping technique** ([https://cucumber.io/blog/2015/12/08/example-mapping-introduction](https://cucumber.io/blog/2015/12/08/example-mapping-introduction)) was discovered/invented by Matt Wynne, who regularly facilitates requirement workshops for his customers. At one of his workshops, he had a pack of index cards in four different colors with him. He used the green cards to capture examples and grouped them by rules, which he wrote on blue cards. He discovered that arranging these cards as a map helps guide the discussion and gives a good visual overview of the requirements.

When participating in an Example Mapping workshop, we capture different artifacts on differently colored index cards or post-it notes:

*   _Examples_ are captured on **green cards**— they illustrate the concrete behavior of the system.
*   _Rules_ are written on **blue cards**— these are logical groupings of the examples and usually focus on a particular condition. Many teams call these **acceptance criteria** (**AC**), **business rules**, or simply **requirements**.
*   _Questions_ or _assumptions_ are captured on **red cards**— these are any topics that would block the discussion. Since these are visible to everyone, we can avoid re-discussing these (usually frustrating) topics again and again.
*   _User stories_ are captured on **yellow cards**— we usually start discussing a single user story, but as we dig into the details, we often decide to split the story into smaller stories and postpone some of them.
    
    #### Seb's story: Business rules, requirements, acceptance criteria
    
    When my teams start discussing a user story, what they typically want to understand is the scope of the story and how difficult it might be to implement. Examples really help us understand how the story is supposed to behave, but we want them in related groups. These groupings have been called different things by different teams: business rules, acceptance criteria, requirements. Each of the terms comes with its own baggage and often hampers communication in the team. Instead, we've started just calling them rules— they're abstract statements that describe a single aspect of behavior. An added bonus is that when it comes to splitting a story, we can often split it simply by moving some rules (and their associated examples) to a new story.
    

We place the story card on the top row and arrange the rules in a row underneath. The examples belonging to a particular rule are placed below the rule card they relate to. We put the red cards to the side of the example map. At the end of the discussion, the desk should look like _Figure 2.9_.

#### Gaspar's story: Rejoining a discussion

We have all been in meetings where a notification on our phone or some other interruption distracts our focus. Once you fall out of an animated discussion, it is very hard to get back into it. This kind of problem can be minimized by establishing a better meeting culture, but it cannot be avoided completely. So, we'd better accept that this might happen and create an infrastructure that helps people get back into the discussion as quickly as possible. Having a visual map (or a mind map) that is visible to everyone makes it easier to see the big picture and see the details at the same time.

The example cards will be used later when we come to write our scenarios. It does not matter what format you use to write examples as long as you capture all the details that seemed important in the discussion. For example, even if you use Cucumber, you should not use Given/When/Then to write your examples.

When we have captured an example, we give it a title so that we can refer to it easily. One simple way of coming up with a title is to copy the way that episodes of the _Friends_ sitcom were named: "_The One Where Rachel Finds Out_." The words you put after "_The One Where ..._" happen to be very good titles for our examples: "_The One Where the Order Has Been Picked Up Already_".

There's no strict order you should collect the examples and the rules in. If the story is simple or well prepared, it will probably arrive with an initial set of rules (or AC). In this case, it makes sense to go through these rules and understand their details by creating examples that illustrate each of them.

In other situations, where the story is vaguer, it might make sense to come up with some examples that describe the typical behaviors that will be expected. Then, identify the rules that govern them.

No matter how you do it, it is practical to nominate a **facilitator**, who keeps the meeting going. The facilitator ensures that the discussion is captured on the cards and that everyone agrees with the form in which they have been written down. The facilitator is not a special role; anyone in the team can do it. We recommend you rotate this role across all team members.

With **Example Mapping**, you can discuss detailed requirements in a surprisingly short time. In many cases, the details of a user story can be discussed in 20-30 minutes. We've found that this style of workshop can work for teams no matter what flavor of agile they're using, as we discuss in _Chapter 4, Who Does What and When_. Because the workshops are short, we can run them several times a week.

Once the map has been created, it is important not to lose this information. Some teams take photos and share them with team members. Others pin the cards on a pinboard in the team room or save the information as a mind map.


How To Establish Structured Conversations
-----------------------------------------

Regardless of whether you use Example Mapping or another technique, structuring the conversations will help your requirement workshops be more focused and efficient. It's time to define exactly what we mean by **structured conversation**. A structured conversation is a facilitated exchange of ideas that conforms to a predefined form. In the context of a requirement workshop, a structured conversation exhibits the following properties:

*   **Collaborative**: All attendees participate actively.
*   **Diverse perspectives**: We need a Three Amigos meeting.
*   **Short**: We want regular workshops so that the learning feedback loop stays fast.
*   **Progressive focus**: We capture the progress of the workshop in real time, allowing the discussion to move forward quickly.
*   **Consensus**: Agreed concrete examples are the measure of the workshop's success.

**Collaborative**

The conversations should include the entire team and encourage them to collaborate actively. In many agile projects, the term **collaboration** means nothing more than inviting everyone to a planning meeting at which the product owner explains the requirements, and everyone else listens. We need more bi-directional communication.

#### Gaspar's story: Help them participate in the discussion!

Once, a member of my team asked me an important question after the meeting finished. "This is a pretty important question! Why didn't you ask the PO during the meeting?" I asked, trying to hide my emotions. "Because I wasn't sure I understood everything and I thought my question might have been answered anyway," he responded. I was pretty frustrated about this, and other similar situations, and I was dreaming of a team consisting of communicative, active superheroes asking questions frequently. Soon afterward, I was invited to a non-IT discussion, where neither the topic nor the language was well known to me. I feared that I would not be able to participate properly in the discussion. The organizer helped me out by giving me a handout that contained the agenda, the discussion points, and a few important sentences. Without these, I might have looked dumb, but instead, I was able to participate in the discussion. Impressed by this experience, I revised my attitude to teamwork. Identifying the root causes of communication problems and figuring out how to solve them is far better than dreaming of perfection and whining when you can't achieve it. Working with an all-superhero team must be really boring.

Everyone has a slightly different personality. You should establish a culture where everyone can participate, regardless of their personality. By using a method that requires people to stand up and move, talk to each other, and arrange/annotate colored cards, we can exercise different senses, so everyone can contribute in the areas that they feel most comfortable with. For distributed teams, the possibilities are more limited, but with a few smart ideas, the same efficiency can be achieved (see more on this in _Chapter 4, Who Does What and When_).

**Diverse perspectives**

We uncover ambiguities by organizing requirement workshops where the representatives of diverse perspectives (business, test, and development) come together. These meetings are sometimes called _Three Amigos_ ([https://www.infoq.com/interviews/george-dinwiddie-three-amigos](https://www.infoq.com/interviews/george-dinwiddie-three-amigos)) meetings. Despite the name, the point is not that there should be only three people in the room.

In your team, there might be other roles as well (such as UX), or you might invite multiple representatives of the same role. What makes these meetings powerful is that the representatives of the different roles can challenge their understanding of the requirements at an early stage. Even though they are all talking about the same requirement, each person has their own perspective:

*   The business representative focuses on the fulfillment of the business goals, for example, when Patricia agrees that the address can be changed before the order is picked up.
*   The developers explore the technical implications of the feature, for example, when Dave concludes that all solutions for a late change of delivery address will introduce costly complexities.
*   The testers can challenge the feasibility of testing the feature and help identify special corner cases, for example, when Tracey noticed that the order might be picked up while the client was changing the delivery address.

**Short**

We suggest that requirement workshops should be no longer than 30 minutes. This is because:

*   Long meetings are exhausting— you'll often not get active participation from all attendees throughout the meeting.
*   Long meetings are expensive— multiply the time by the number of people in the room and you'll frequently find meetings that cost a person a whole day.
*   Short meetings can be scheduled more frequently— shorter meetings are less disruptive and are easier to schedule than longer ones.
*   Frequent meetings can vary the attendees— we can improve shared ownership by ensuring that it's not always the same people at the meeting.
*   Frequent meetings reduce the impact of unanswerable questions— we can continue the discussion as soon as we discover the answer.

Your situation may require longer, infrequent meetings, but even then we urge you to structure each meeting in several short, focused sessions.

**Progressive focus**

We start the workshop knowing what we're going to discuss, but we never know quite what we'll discover. However, as the workshop unfolds, we must capture what we learn so that, at the end, we have a full record of our knowledge. Our understanding becomes progressively more complete, while the record allows us to maintain focus on what we still don't understand.

#### Seb's story: Progressive JPEG

I think of a structured conversation as being a bit like a JPEG image downloading over a slow connection. The image becomes progressively more and more detailed. Early on, you can often guess what it's an image of, but it's not until it finishes downloading that you can see the picture in its full glory.

For our conversation to keep focused while our understanding develops progressively, we need to:

*   Know what we're meeting about—Patricia emailed out the story for discussion the day before.
*   Capture our understanding as it develops—the format is not important, but it must be low friction and captured continuously.
*   Be able to quickly grasp the state of the discussion by capturing our understanding in a form that is readable by everyone, such as an example map.
*   Stop discussions that aren't going anywhere, for example, by capturing unanswerable questions rather than discussing them fruitlessly.

**Consensus**

We know we have achieved consensus when we agree:

*   That the output is correct— the output may not be complete, but everything in it must be agreed by everybody.
*   Whether the feature is sufficiently understood— if it is, then it needs no further discussion and development can proceed.
*   That there is no hidden/private knowledge— the content of all conversations is captured in the output and there is no need to consolidate private notes, email chains, and so on.
*   Who is responsible for answering each remaining question— capturing questions is a great way to keep the discussion moving, but someone needs to ensure that they get answered.


What We Just Learned
--------------------

Software development is a learning process. The more we can learn about the problem, the easier solving it becomes. This process can be made more effective by having several team members (with different perspectives) analyzing the requirements together _before they start developing the software_. These collaborative requirement workshops are most productive if they are kept short and run regularly throughout the project— often several times a week.

There are many structured conversation techniques that have been used to facilitate these requirement workshops, but the most useful that we have come across is Example Mapping, as described by Matt Wynne. It's simple, well documented, and results in a visual record of the conversation that clearly communicate the agreements that were reached, as well as the questions that remain unanswered. This, in turn, makes it easier for those who weren't at the meeting to understand the issues and provide useful feedback.

All software development projects depend on well-understood requirements, but the approach described here works particularly well for the lightweight agile and lean methods that are in common use today.


Chapter 3. What Is an Example?
==============================

Introduction
------------

In the previous chapter, we explored the role of examples in the BDD approach. You may have wondered: "Are examples really enough to specify a feature? How many examples do we need to specify a feature?"

In this chapter, we're going to answer these questions.

How Hard Is Concrete?
---------------------

We all know what an example is, but when it comes to creating concrete examples that unambiguously illustrate how a system should behave, we need to ensure they're good examples.

It's best to think of an example as being an artifact divided into three parts – context, action, and outcome – and to think of these in the _reverse_ order.

![Figure 3.1: The anatomy of an example
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_01.jpg)

###### Figure 3.1: The anatomy of an example

The **outcome** is a description of the state of the system after the behavior we're interested in has taken place. It should contain enough detail for us to actually go and check that the system has behaved according to our expectations.

The **action** is the event that causes the behavior we're interested in to take place. It might be an action by a user, but equally, it might be input from another system, a scheduled job, or any other stimulus that causes the system to react.

The **context** describes the state the system is in _before_ the action takes place. Sometimes, when the starting context is obvious, it can be tempting to omit a description of the context. Don't do this! When you are very familiar with creating concrete examples, you might consider revisiting this advice, but not yet.

#### Seb's Story: Illustrating Things With Concrete

I often find myself explaining why we use the word _concrete_ when talking about examples. Rules are generic expressions of how a system ought to behave – they each cover lots of possible situations. An example, on the other hand, expresses a single situation that illustrates an interesting application of a rule. This expression should leave no room for ambiguity – its whole purpose is to clarify a rule – so we need to be specific and precise. The term _concrete_ is often used to mean that we are dealing with specific details, and that is the context that we are using it in when we talk about concrete examples.

When specifying a concrete example, the context, action, and outcome all need to specify concrete data. Imagine you had to actually run through the example using the real system – what data would need to be provided for you to cause the system to verifiably behave in the expected way? Use actual text strings and values – usernames, passwords, amounts of money, and the dates of transactions.

Is All That Concrete Essential?
-------------------------------

Most systems are complex enough to need large amounts of context data (such as reference data tables, user accounts, and inventories) before they can exhibit the behaviors we're interested in. Does that mean every example has to specify all this information? That would make for very long, boring examples, so thankfully the answer is "No!"

Each example illustrates a single rule, and should only mention concrete data that is directly related to the behavior being illustrated. Imagine you're writing examples that illustrate changing the delivery address after a customer places an order for a pizza. Does the example's context need to specify the type of pizza being ordered? Or that the customer's payment was successfully authorized? No. There will be other rules that govern pizza choice and successful payment. These will be illustrated by examples that focus on the essential, concrete data that relates to those behaviors. The example that illustrates changing a delivery address should only contain enough information to determine that the address change is processed correctly, nothing more.

Remember that the purpose of the requirement workshop is to use concrete examples to quickly explore the specific requirement and demonstrate that everyone understands exactly what is being asked for. Getting the right level of detail is not our primary concern— inessential detail will be removed later when we formulate the example as a scenario (see _The BDD Books: Formulation_).

How Many Examples Do We Need?
-----------------------------

Let's have a look at the rule that our team discussed in _Chapter 2, Structured Conversation_:

![Figure 3.2: Address change rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_02.jpg)

###### Figure 3.2: Address change rule

The team were exploring the address change functionality and came to the conclusion that the address can only be changed before an order is picked up by a delivery person. This means that the delivery address can't be changed once an order has progressed beyond the **Waiting for pickup** state:

![Figure 3.3: Order states
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_03.jpg)

###### Figure 3.3: Order states

You probably remember that there was a misunderstanding between team members during the discussion. Initially, the rule stated that the address could be changed before an order is **Waiting for pickup** (which means it has not progressed beyond the **In preparation** state). The team resolved the misunderstanding using concrete examples, but it could still be implemented incorrectly!

Without knowing much about the application, we can imagine that this functionality will be implemented using an **if** statement that will look something like this:

if (order.State <= OrderState.WaitingForPickup)

...

So, let's imagine that Dave, who developed this feature, uses **<** instead of **<=** in this condition. This is the sort of mistake that is easy to make, even though the developer is fully aware of the requirement's details.

The team described two examples for the rule:

![Figure 3.4: Examples for the address change rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_04.jpg)

###### Figure 3.4: Examples for the address change rule

In the first example, the phrase _Pizza prepared and waiting for pickup_ refers exactly to the **Waiting for pickup** state. This is good news because if Dave misses the **\=** from the condition, the first example will not be satisfied.

Does this mean that these two examples are enough? Will they catch all possible programming mistakes? Certainly not.

Shall we add more examples then? Shall we capture examples for all possible states?

Why Stop Now?
-------------

Catching all implementation mistakes is important, but during the discovery phase, our focus is on the requirements: _We would like to prevent bugs from ever happening_. We want to achieve this by ensuring a better understanding of the requirements. The examples that we generate during the requirement workshop illustrate the desired behavior of the system. They demonstrate that the development team understands what they are being asked to do and that the business understands the implications of what they are asking for.

Once captured, examples make excellent test cases for use once the software has been developed because they specify the concrete state of the system before a specific behavior is exercised, as well as the expected outcome that should be observed.

When we start considering the exhaustive exploration of all possible combinations, we have moved away from understanding the requirements, into the realm of software testing. When the examples start to address concerns that the product owner is not interested in, it's time for the facilitator to bring the discussion back on track.

This doesn't mean that we should forget about attaining good coverage in our tests (for example, using the **Classification Tree Method** ([https://en.wikipedia.org/wiki/Classification\_Tree\_Method](https://en.wikipedia.org/wiki/Classification_Tree_Method)) and **equivalence classes** ([https://en.wikipedia.org/wiki/Equivalence\_partitioning](https://en.wikipedia.org/wiki/Equivalence_partitioning))), but this should be done by the delivery team outside the requirement workshop (see more on this in _Chapter 4, Who Does What and When_). This will keep the conversation engaging for the product owner and the rest of the team.

Rules Versus Examples
---------------------

We have discussed how examples are needed to explore and illustrate each rule (requirements, business rules, and acceptance criteria). We showed that rules on their own were insufficient. Let's turn the question around: are examples alone sufficient to specify the functionality of an application?

Let's look at the examples in _Figure 3.4_ again. How easy would it be to deduce the rule (_Figure 3.2_) that they are illustrating if all you had were the examples?

Generally, we can say that it is not always possible to reverse engineer the rules from the examples, and it would certainly be easier if we never have to try to. Examples illustrate the rules, but they do not replace them. Whenever we capture examples, we have to make sure that we also record the rule as well, because both are needed to document the expected behavior of the system. The rules provide a concise, abstract description, and the examples provide precise, concrete illustrations of them.

This is nothing new— it's how we learn, anyway. When parents want to teach their young children the danger of fire, they explain that it hurts and say, "Never put your finger into a fire". This is the rule. To illustrate this, they might put their own finger over a candle flame (smarter parents only pretend) and cry out to show that it was painful. This is an example.

#### Why Specification By Example?

You might have seen the term **Specification By Example** and assumed that it meant that examples were sufficient to specify software. The intention, however, is to emphasize the use of examples to support a specification by making it harder for rules to be misinterpreted.

The product owner usually wants the delivery team to solve a specific problem. She will often come to the team with a high-level user story and some acceptance criteria, but where did they come from?

The usual way we start thinking about any problem is to think about some situations in which it occurs (in other words, examples). Once a good enough understanding of the general problem has been understood, we'll then try to express this as business rules or acceptance criteria. This is the process that product owners (and business analysts) frequently go through before they talk to the team. Then, in the requirement workshop, the team explores their understanding by coming up with more examples that test that the rules have been expressed correctly. Finally, the development team will write some software, and it's the rule that gets implemented, while the examples make great test cases.

We need to document the rules even when, later, we formulate the examples into scenarios.

While rules and examples are extremely powerful ways to specify the behavior of software, there are other tools that complement them. Definitions, model diagrams, formulas, glossaries, and other artifacts might also be necessary as part of a specification.

My Example Illustrates Multiple Rules!
--------------------------------------

During requirement workshops, we break down the user stories into rules (or acceptance criteria) and then we illustrate these rules with examples. When using **Example Mapping**, we would like to produce a tidy map with a collection of examples underneath each rule, something like the one shown in _Figure 2.9_. Sometimes, this can be tricky. Depending on the situation, you might find an example that illustrates multiple rules at once. Is this a problem?

As we discussed in _Chapter 2, Structured Conversation_, we use rules and examples to structure our conversations in order to make our requirement workshops more efficient. To be able to focus on a particular aspect of the problem, we should try to come up with examples that are focused, that is, they illustrate only one rule.

Focusing on a rule and utilizing it are two different things, though. Looking back at our example, we can see that we have multiple rules that are related to the address change. For example, we have a rule that only a valid address is accepted. We also have a rule that you can change the address only if the order has not been picked up yet. Let's have a look at the positive example of the second rule:

![Figure 3.5: Positive example of the order state rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_05.jpg)

###### Figure 3.5: Positive example of the order state rule

As you can see, this example describes a successful address change, and this implies that all other rules – including the valid address rule – have to be satisfied. So, we had to pick a valid address.

Let's take a closer look at this example. Does it utilize the valid address rule? Yes, it does! Does it focus on address validity? No, it doesn't! Does it illustrate the valid address rule? This is more difficult to answer because this concrete example would probably work as a positive example even for the address validity rule. Still, the way the example has been written directs the attention to the order state and not to the validity of the address. Let's contrast it with the positive example of the valid address rule:

![Figure 3.6: Positive example of the valid address rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_06.jpg)

###### Figure 3.6: Positive example of the valid address rule

As you can see, the final result is the same (**Change accepted**), but the phrasing of the example helps us to focus on the address' validity.

If you find yourself writing a single example that illustrates multiple rules, don't worry. Before you finish the workshop, consider splitting the example up into several examples that each focus on a single rule. When you do this, you'll probably find that some of the concrete data that's essential to illustrate one of the rules is not essential to illustrate the other(s).

The Bigger Picture
------------------

Short focused examples are great to illustrate the behavior of a single rule but don't give you a good overview of a whole interaction with the system. Other forms of documentation are useful to get a feel for how the system will behave. We often use wireframes, page-flows, and box-and-arrow diagrams of all varieties.

Remember, the Agile Manifesto asks us to value working software over comprehensive documentation, not to dispense with documentation entirely.

What We Just Learned
--------------------

The requirement workshop is an excellent place to challenge the team's understanding of the requirements. In this chapter, we have seen that it can take quite a bit of practice to get good at creating concrete examples that drive away ambiguity while keeping them easy to read and maintain. Nor are examples sufficient on their own. They need to be created to illustrate business rules, and those rules should be documented alongside the examples.

We discussed the anatomy of a good example, made up of context, action, and outcome, and emphasized the need to use appropriate concrete data. And we've warned you that an example should usually illustrate a single rule and contain only data that is essential to understand the behavior of that rule. We've mentioned that other forms of documentation are needed to paint the bigger picture.

Getting good takes time, but getting started is a simple matter of giving it a try. You now have enough information to make a good start. In the next chapter, we'll talk more about who does what (and when) in the BDD approach.


Introduction
------------

In the previous chapter, we explored the role of examples in the BDD approach. You may have wondered: "Are examples really enough to specify a feature? How many examples do we need to specify a feature?"

In this chapter, we're going to answer these questions.


How Hard Is Concrete?
---------------------

We all know what an example is, but when it comes to creating concrete examples that unambiguously illustrate how a system should behave, we need to ensure they're good examples.

It's best to think of an example as being an artifact divided into three parts – context, action, and outcome – and to think of these in the _reverse_ order.

![Figure 3.1: The anatomy of an example
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_01.jpg)

###### Figure 3.1: The anatomy of an example

The **outcome** is a description of the state of the system after the behavior we're interested in has taken place. It should contain enough detail for us to actually go and check that the system has behaved according to our expectations.

The **action** is the event that causes the behavior we're interested in to take place. It might be an action by a user, but equally, it might be input from another system, a scheduled job, or any other stimulus that causes the system to react.

The **context** describes the state the system is in _before_ the action takes place. Sometimes, when the starting context is obvious, it can be tempting to omit a description of the context. Don't do this! When you are very familiar with creating concrete examples, you might consider revisiting this advice, but not yet.

#### Seb's Story: Illustrating Things With Concrete

I often find myself explaining why we use the word _concrete_ when talking about examples. Rules are generic expressions of how a system ought to behave – they each cover lots of possible situations. An example, on the other hand, expresses a single situation that illustrates an interesting application of a rule. This expression should leave no room for ambiguity – its whole purpose is to clarify a rule – so we need to be specific and precise. The term _concrete_ is often used to mean that we are dealing with specific details, and that is the context that we are using it in when we talk about concrete examples.

When specifying a concrete example, the context, action, and outcome all need to specify concrete data. Imagine you had to actually run through the example using the real system – what data would need to be provided for you to cause the system to verifiably behave in the expected way? Use actual text strings and values – usernames, passwords, amounts of money, and the dates of transactions.


Is All That Concrete Essential?
-------------------------------

Most systems are complex enough to need large amounts of context data (such as reference data tables, user accounts, and inventories) before they can exhibit the behaviors we're interested in. Does that mean every example has to specify all this information? That would make for very long, boring examples, so thankfully the answer is "No!"

Each example illustrates a single rule, and should only mention concrete data that is directly related to the behavior being illustrated. Imagine you're writing examples that illustrate changing the delivery address after a customer places an order for a pizza. Does the example's context need to specify the type of pizza being ordered? Or that the customer's payment was successfully authorized? No. There will be other rules that govern pizza choice and successful payment. These will be illustrated by examples that focus on the essential, concrete data that relates to those behaviors. The example that illustrates changing a delivery address should only contain enough information to determine that the address change is processed correctly, nothing more.

Remember that the purpose of the requirement workshop is to use concrete examples to quickly explore the specific requirement and demonstrate that everyone understands exactly what is being asked for. Getting the right level of detail is not our primary concern— inessential detail will be removed later when we formulate the example as a scenario (see _The BDD Books: Formulation_).


How Many Examples Do We Need?
-----------------------------

Let's have a look at the rule that our team discussed in _Chapter 2, Structured Conversation_:

![Figure 3.2: Address change rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_02.jpg)

###### Figure 3.2: Address change rule

The team were exploring the address change functionality and came to the conclusion that the address can only be changed before an order is picked up by a delivery person. This means that the delivery address can't be changed once an order has progressed beyond the **Waiting for pickup** state:

![Figure 3.3: Order states
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_03.jpg)

###### Figure 3.3: Order states

You probably remember that there was a misunderstanding between team members during the discussion. Initially, the rule stated that the address could be changed before an order is **Waiting for pickup** (which means it has not progressed beyond the **In preparation** state). The team resolved the misunderstanding using concrete examples, but it could still be implemented incorrectly!

Without knowing much about the application, we can imagine that this functionality will be implemented using an **if** statement that will look something like this:

if (order.State <= OrderState.WaitingForPickup)

...

So, let's imagine that Dave, who developed this feature, uses **<** instead of **<=** in this condition. This is the sort of mistake that is easy to make, even though the developer is fully aware of the requirement's details.

The team described two examples for the rule:

![Figure 3.4: Examples for the address change rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_04.jpg)

###### Figure 3.4: Examples for the address change rule

In the first example, the phrase _Pizza prepared and waiting for pickup_ refers exactly to the **Waiting for pickup** state. This is good news because if Dave misses the **\=** from the condition, the first example will not be satisfied.

Does this mean that these two examples are enough? Will they catch all possible programming mistakes? Certainly not.

Shall we add more examples then? Shall we capture examples for all possible states?


Why Stop Now?
-------------

Catching all implementation mistakes is important, but during the discovery phase, our focus is on the requirements: _We would like to prevent bugs from ever happening_. We want to achieve this by ensuring a better understanding of the requirements. The examples that we generate during the requirement workshop illustrate the desired behavior of the system. They demonstrate that the development team understands what they are being asked to do and that the business understands the implications of what they are asking for.

Once captured, examples make excellent test cases for use once the software has been developed because they specify the concrete state of the system before a specific behavior is exercised, as well as the expected outcome that should be observed.

When we start considering the exhaustive exploration of all possible combinations, we have moved away from understanding the requirements, into the realm of software testing. When the examples start to address concerns that the product owner is not interested in, it's time for the facilitator to bring the discussion back on track.

This doesn't mean that we should forget about attaining good coverage in our tests (for example, using the **Classification Tree Method** ([https://en.wikipedia.org/wiki/Classification\_Tree\_Method](https://en.wikipedia.org/wiki/Classification_Tree_Method)) and **equivalence classes** ([https://en.wikipedia.org/wiki/Equivalence\_partitioning](https://en.wikipedia.org/wiki/Equivalence_partitioning))), but this should be done by the delivery team outside the requirement workshop (see more on this in _Chapter 4, Who Does What and When_). This will keep the conversation engaging for the product owner and the rest of the team.


Rules Versus Examples
---------------------

We have discussed how examples are needed to explore and illustrate each rule (requirements, business rules, and acceptance criteria). We showed that rules on their own were insufficient. Let's turn the question around: are examples alone sufficient to specify the functionality of an application?

Let's look at the examples in _Figure 3.4_ again. How easy would it be to deduce the rule (_Figure 3.2_) that they are illustrating if all you had were the examples?

Generally, we can say that it is not always possible to reverse engineer the rules from the examples, and it would certainly be easier if we never have to try to. Examples illustrate the rules, but they do not replace them. Whenever we capture examples, we have to make sure that we also record the rule as well, because both are needed to document the expected behavior of the system. The rules provide a concise, abstract description, and the examples provide precise, concrete illustrations of them.

This is nothing new— it's how we learn, anyway. When parents want to teach their young children the danger of fire, they explain that it hurts and say, "Never put your finger into a fire". This is the rule. To illustrate this, they might put their own finger over a candle flame (smarter parents only pretend) and cry out to show that it was painful. This is an example.

#### Why Specification By Example?

You might have seen the term **Specification By Example** and assumed that it meant that examples were sufficient to specify software. The intention, however, is to emphasize the use of examples to support a specification by making it harder for rules to be misinterpreted.

The product owner usually wants the delivery team to solve a specific problem. She will often come to the team with a high-level user story and some acceptance criteria, but where did they come from?

The usual way we start thinking about any problem is to think about some situations in which it occurs (in other words, examples). Once a good enough understanding of the general problem has been understood, we'll then try to express this as business rules or acceptance criteria. This is the process that product owners (and business analysts) frequently go through before they talk to the team. Then, in the requirement workshop, the team explores their understanding by coming up with more examples that test that the rules have been expressed correctly. Finally, the development team will write some software, and it's the rule that gets implemented, while the examples make great test cases.

We need to document the rules even when, later, we formulate the examples into scenarios.

While rules and examples are extremely powerful ways to specify the behavior of software, there are other tools that complement them. Definitions, model diagrams, formulas, glossaries, and other artifacts might also be necessary as part of a specification.


My Example Illustrates Multiple Rules!
--------------------------------------

During requirement workshops, we break down the user stories into rules (or acceptance criteria) and then we illustrate these rules with examples. When using **Example Mapping**, we would like to produce a tidy map with a collection of examples underneath each rule, something like the one shown in _Figure 2.9_. Sometimes, this can be tricky. Depending on the situation, you might find an example that illustrates multiple rules at once. Is this a problem?

As we discussed in _Chapter 2, Structured Conversation_, we use rules and examples to structure our conversations in order to make our requirement workshops more efficient. To be able to focus on a particular aspect of the problem, we should try to come up with examples that are focused, that is, they illustrate only one rule.

Focusing on a rule and utilizing it are two different things, though. Looking back at our example, we can see that we have multiple rules that are related to the address change. For example, we have a rule that only a valid address is accepted. We also have a rule that you can change the address only if the order has not been picked up yet. Let's have a look at the positive example of the second rule:

![Figure 3.5: Positive example of the order state rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_05.jpg)

###### Figure 3.5: Positive example of the order state rule

As you can see, this example describes a successful address change, and this implies that all other rules – including the valid address rule – have to be satisfied. So, we had to pick a valid address.

Let's take a closer look at this example. Does it utilize the valid address rule? Yes, it does! Does it focus on address validity? No, it doesn't! Does it illustrate the valid address rule? This is more difficult to answer because this concrete example would probably work as a positive example even for the address validity rule. Still, the way the example has been written directs the attention to the order state and not to the validity of the address. Let's contrast it with the positive example of the valid address rule:

![Figure 3.6: Positive example of the valid address rule
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_03_06.jpg)

###### Figure 3.6: Positive example of the valid address rule

As you can see, the final result is the same (**Change accepted**), but the phrasing of the example helps us to focus on the address' validity.

If you find yourself writing a single example that illustrates multiple rules, don't worry. Before you finish the workshop, consider splitting the example up into several examples that each focus on a single rule. When you do this, you'll probably find that some of the concrete data that's essential to illustrate one of the rules is not essential to illustrate the other(s).


The Bigger Picture
------------------

Short focused examples are great to illustrate the behavior of a single rule but don't give you a good overview of a whole interaction with the system. Other forms of documentation are useful to get a feel for how the system will behave. We often use wireframes, page-flows, and box-and-arrow diagrams of all varieties.

Remember, the Agile Manifesto asks us to value working software over comprehensive documentation, not to dispense with documentation entirely.


What We Just Learned
--------------------

The requirement workshop is an excellent place to challenge the team's understanding of the requirements. In this chapter, we have seen that it can take quite a bit of practice to get good at creating concrete examples that drive away ambiguity while keeping them easy to read and maintain. Nor are examples sufficient on their own. They need to be created to illustrate business rules, and those rules should be documented alongside the examples.

We discussed the anatomy of a good example, made up of context, action, and outcome, and emphasized the need to use appropriate concrete data. And we've warned you that an example should usually illustrate a single rule and contain only data that is essential to understand the behavior of that rule. We've mentioned that other forms of documentation are needed to paint the bigger picture.

Getting good takes time, but getting started is a simple matter of giving it a try. You now have enough information to make a good start. In the next chapter, we'll talk more about who does what (and when) in the BDD approach.


Chapter 4. Who Does What and When?
==================================

Introduction
------------

In the previous chapters, we discussed the importance of collaboration for a **Behaviour Driven Development** (**BDD**) approach to be successful. In this chapter, we will show how BDD can be integrated into the development process and we'll also answer some common questions, such as "Who should write the scenarios?", "Who do we need to participate in requirement workshops?", and "Should the testers or the developers automate the scenarios?".

In this chapter, we're going to describe the BDD approach in more detail than we have previously. We'll also provide some examples of how BDD has been successfully adopted by various organizations using different development processes. Don't treat these examples as best practice checklists, but rather as starting points that allow you to develop a process that fits your project.

Remember that every project is different. Every project will follow different development processes (such as **Scrum** or **Kanban**). These processes are integrated into the culture of a company that has its own definition of what each role is responsible for. For example, how much development skills should a tester have? Individual team members will have different backgrounds and personalities.

The most successful projects consider all these factors when defining their development process (and understand that this process has to be reviewed and adapted as necessary).

The BDD Approach
----------------

To be able to discuss how to integrate BDD into your development process, let's look at the BDD approach in detail and list the different tasks and activities that are typically involved.

You probably remember the high-level overview of the BDD approach that we provided in _Chapter 1, What Is BDD?_:

![Figure 4.1: High-level overview of BDD approach](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_01.jpg)

###### Figure 4.1: High-level overview of BDD approach

In practice, the BDD approach is more complex and consists of several connected activities, which we will discuss in detail. To get started, take a look at the following diagram:

![Figure 4.2: Tasks and activities in the BDD approach
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_02.jpg)

###### Figure 4.2: Tasks and activities in the BDD approach

The following list contains a brief overview of these activities. In the list, we describe the ideal timing, the team members involved, and also the expected outcome:

1.  **Pick a user story**:
    
    **What**: Requirements elicitation and prioritization.
    
    **When**: Before the requirements workshop – preferably at least a day in advance.
    
    **Who**: The product owner, business analyst, customer, and key stakeholders.
    
    **Outcome**: A candidate user story, scoped with relevant business rules (acceptance criteria). There should be enough detail to allow the development team to explore the scope of the story using concrete examples.
    
2.  **Requirement workshop:**
    
    **What**: Discuss the user story by focusing on rules and examples.
    
    **When**: Regularly throughout the project – running short workshops several times a week is recommended.
    
    **Who**: All roles must be represented at this meeting (at least the three amigos), but multiple representatives of each role can attend. As we described in the _How to establish structured conversations_ section in _Chapter 2, Structured Conversation_, each role representative has their own responsibility and focus.
    
    **Outcome**: The candidate story is refined and is frequently decomposed into smaller stories, each accompanied by a set of rules and examples. The examples should be captured in as light a format as possible, and should not be written using _Given_/_When_/_Then_.
    
3.  **Formulate:**
    
    **What**: Formulate the examples into scenarios.
    
    **When**: Before the implementation of the story starts. Best done as the first task of development, but sometimes done as a separate workshop where all scenarios scheduled for the iteration are formulated.
    
    **Who**: In the beginning, when the language and style we use to phrase scenarios are still being established, it is recommended to do it with the entire team. Later, it can be efficiently done by a pair: a developer (or someone who is responsible for the automation) and a tester (or someone who is responsible for quality), as long as their output is actively reviewed by a business representative.
    
    **Outcome**: Scenarios added to the source control. The language of scenarios is business-readable and consistent.
    
4.  **Review:**
    
    **What**: Review scenarios to ensure they correctly describe the expected business behavior.
    
    **When**: Whenever a scenario is written or modified.
    
    **Who**: The product owner (and maybe a business analyst, the customer, and key stakeholders).
    
    **Outcome**: Confidence that the development team has correctly understood the requirements of the business and that the behavior is expressed using appropriate terminology.
    
    #### Seb's story: Handgun in carry-on luggage
    
    I was going through security at the airport and the security guard called me over after my carry-on luggage had been X-rayed. "Sir", he said, "there appears to be a handgun in your luggage." I was very surprised. I don't usually travel with a handgun!
    
    It turns out that watching X-rays of other people's luggage is not the world's most interesting job. To keep security guards alert, the software randomly superimposes the image of a forbidden item on the X-ray.
    
    Reviewing scenarios is an important job, and it's the job of those who write scenarios to make sure that they are interesting enough to keep their business colleagues eager to review them. It's all too easy to write verbose, repetitive scenarios that are difficult and boring to read. When this happens, you might just get a short review response, such as "Looks fine to me."
    
    To check that scenarios really are interesting enough to read, occasionally leave one out (or add an incorrect one). If you don't get feedback on your deliberate mistake, it probably means that you need to work with your business to understand what level of detail they are interested in having documented.
    
5.  **Automate**
    
    **What**: Automate scenarios by writing test automation code.
    
    **When**: Automate scenarios before starting the implementation, following a test-driven approach. This way, the implementation can be "driven" by scenarios, so the application will be designed for testability and the development team will have a greater focus on real outcomes.
    
    Some teams do the automation task separately or even (especially when the application is only automated through the UI) after the implementation is finished. This approach reduces the advantages of BDD, but the end result might still be better than doing ad hoc integration testing or no testing at all. You may find yourself working in this way as a part of a cultural change, but try not to get stuck here.
    
    **Who**: Developers or test automation experts. When doing pair programming, pairing a developer with a tester works well.
    
    Whether scenarios should be automated by developers or testers is very dependent on the company culture and the team setup. It is definitely true that for some complex, design-related aspects of the test automation infrastructure, developers are necessary. On the other hand, a good automation infrastructure may enable team members with less coding experience to perform automation tasks.
    
    **Outcome**: A set of (failing) automated scenarios that can be executed both locally and in continuous integration/delivery/deployment environments.
    
6.  **Implement**
    
    **What**: Implement the application code to make the automated scenarios pass. We show this as the classic Test Driven Development (TDD) cycle of Red/Green/Refactor, with programmer tests driving the implementation.
    
    **When**: Implementation starts as soon as the first scenario has been automated, so the implementation is being driven by a failing scenario.
    
    **Who**: Developers.
    
    **Outcome**: A working application that behaves as specified. This can be verified automatically.
    
7.  **Supplementary tests**
    
    **What**: Perform manual testing and other forms of testing described in your testing strategy. This can include scripted testing, manual testing, exploratory testing, performance testing, security testing, or some other type of testing. For more details, see quadrants 3 and 4 of the _Agile Testing Quadrants_ ([http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/](http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/)).
    
    **When**: You don't have to wait until an entire story is finished. Scenarios provide a functional breakdown of the user story, so each scenario itself contributes a meaningful part of the application's behavior. Therefore, as soon as there is a completed scenario, testing activities can start. (Test preparation can start even earlier, of course.)
    
    **Who**: Testers – other team members can help with some aspects of testing, but these activities are usually coordinated by testers.
    
    **Outcome**: A high-quality working application; the story is done.
    
8.  **Release**
    
    **What**: Produce a potentially shippable increment. This is the end of our cycle, but a released product should be used to gather feedback from users, which can provide input for future development cycles – although this is out of scope for this book.
    
    **When**: At any time that all tests are passing, but especially at the end of an iteration.
    
    **Who**: The development team will be responsible for producing the releasable artifacts, but there may be specialized teams that create the actual release package.
    
    **Outcome**: An installable release package.
    

BDD in Scrum
------------

Now let's take a look at a few examples of BDD being integrated into different development process models. We'll start with the most commonly used agile methodology, the Scrum framework. BDD works very well with Scrum, although many people seem to be surprised by this.

In Scrum, work is organized into sprints that are 2-4 week iterations. There are regular workshops that focus on the customer's requirements throughout each sprint (involving backlog refinement – Scrum no longer uses the term **backlog grooming**, replacing the word grooming with **refinement** – sprint planning preparation, and sprint planning) where user stories are prepared. At the sprint planning meeting, the team chooses a few stories to implement in the upcoming sprint. Once the sprint is done, the team presents its results in a sprint review/demo and potential process improvements are discussed in the sprint retrospective.

### Requirement Workshops

Since a sprint is relatively short, and the number of stories the team usually has to deliver is small, the team can get a good overview and understanding of all the stories in the sprint backlog.

As previously mentioned, Scrum involves regular meetings focused on customer requirements where user stories are prepared (backlog refinement and sprint planning preparation). This culminates in the sprint planning meeting, where the team finally commits to the details. When doing BDD, we explore and discover the details of stories at these meetings.

This can be achieved with the help of structured conversations (_Chapter 2, Structured Conversation_) and an appropriate technique, such as Example Mapping (_the_ _Example Mapping In A Nutshell section in Chapter 2, Structured Conversation)_.

If the team has good access to the product owner, we recommend that you organize short Example Mapping sessions regularly, and have these replace backlog refinement meetings. You can hold them weekly, but you might consider scheduling them several times a week, or even daily. This enables a product owner to get feedback quickly from the team regarding a new idea and removes the need for informal communication (such as email threads and water-cooler conversations), where any decisions made can easily be lost or forgotten. Short, daily meetings have a lot of advantages and you can always cancel a session when your team has prepared enough stories for the next sprint.

Examples help us focus on the outcomes, even during early discussions, which improves the effectiveness of communication. If you use Example Mapping, you will spend less time on unstructured discussions, jumping between topics and re-discussing questions that cannot be answered at the meeting. Of course, Example Mapping does not make complex problems simple, but your time in the session will be spent on valuable discussions.

#### Gaspar's story: BDD works even when access to your product owner is limited

I worked on a complex legacy project, where we were committed to capturing scenarios for new features. The customer was an agile IT company and they had lots of experience with Scrum.

The domain was new to us and access to the product owner was limited. We were prepared for long and exhausting sprint planning meetings, but surprisingly, we were able to finish these meetings early, sprint after sprint.

After one of these meetings, the product owner turned to me and asked: "How do you manage to complete the sprint planning meeting so quickly? Other ones that I've been to are much longer and never finish on time."

I could not really answer him at the time, because we were not intentionally doing anything special. (This was years before Example Mapping.) However, after analyzing our meetings, we realized that our commitment to writing scenarios made us focus on examples during the discussion. We did this to make it easier to formulate scenarios later, but a side effect was that our meetings were more structured and achieved their goal more quickly.

If access to the product owner is limited, as in Gaspar's story, you can still integrate structured conversations and Example Mapping into the sprint planning meeting.

### Formulate

Formulating an example as a scenario is tricky. It involves decisions about which word to use, how to construct a phrase, and what verb tense to use. This can take a long time.

Establishing a shared understanding is important, but making the entire team discuss the best way to express a scenario in business language is not efficient. So, generally, we would not recommend formulating scenarios during preparation or planning meetings.

In Scrum, the best approach to formulating scenarios is to include it as a task in the story's implementation pipeline. This means that the first task on the task board for a story should be the following: formulate the examples of the story as scenarios and add them to the source control. If the story is related to an area of the application where the team has no automation experience, you should consider only formulating a few representative examples into scenarios, so that you can check that their phrasing is convenient for automation. While automating these scenarios, you will learn more about the solution design and you can incorporate this knowledge into the formulation of the remaining scenarios.

Formulation is usually undertaken by a pair, often a developer and a tester. This makes it simpler to fit formulation into the sprint schedule and limits its cost, and the subsequent review by the product owner ensures that the delivery team members really have understood what the business is asking of them.

We have seen teams doing formulation as a special workshop right after sprint planning (that is, on the day following the sprint planning day), where the entire team is split into smaller working groups, working on the formulation of the examples of all stories. Once the smaller groups have finished their work, the team discusses the results together. Although such workshops might be useful in the initial phase, when you learn about BDD and the domain language, it might put quite a significant administrative overhead on the team (yet another fixed day where everyone is expected to be present).

In some projects, the scenarios have to be formally approved by the product owner or someone else. In these cases, the formulation has to be prioritized and planned in a way that means the team does not get blocked.

### How Scenarios Help With The Decomposition Of Stories Into Tasks

In Scrum, stories are usually broken down into tasks. Tasks are work units that represent the design decisions of the team and they are also used to track the daily progress of the team.

The tasks are owned by the development team. The team can list anything as a task that needs to be completed to be able to finish a story. The tasks are often very technical (such as to create a **Users** table) and do not have to be understandable by the product owner.

Examples and scenarios are the opposite – they describe a functional breakdown of the story and they are business-readable. Because of this, it initially seems like BDD has nothing to do with Scrum tasks and task planning. The reality is somewhat different, though. Once you have illustrated the story with a couple of key examples, task planning becomes easier. The key examples paint the big picture and reveal the design decisions that need to be made.

Tasks are usually technical, but where practical, you should try to create them so that each one relates to a single example (scenario), as in "Create tables for capturing the delivery address" instead of a generic **Create tables** task. This is not possible for all tasks – there might be some tasks on which several scenarios depend.

By aligning tasks with scenarios, the development team will realize several benefits:

*   The team will focus on the expected behavior during the implementation. This can help avoid "gold-plating" or implementing infrastructures that are not needed. Starting from the scenario helps follow an **outside-in** development approach ([https://en.wikipedia.org/wiki/Outside%E2%80%93in\_software\_development](https://en.wikipedia.org/wiki/Outside%E2%80%93in_software_development)).
*   You can get feedback about the story implementation earlier. Imagine you have a half-done story where all the database tables are created, but nothing is visible to the users. Now compare that with a half-done story where three of the seven scenarios are already implemented end to end. The latter can be shown to the product owner to get feedback on what has been implemented so far.
*   Manual testing can be started before the story is fully implemented. The execution report of the story scenarios will show which functional parts of the story are ready for testing, so testers do not require status reports to be created.
*   The functional progress provides better transparency and hence increases the trust between the development team and the product owner. A progress status of 57% means nothing, but demonstrating that three scenarios out of seven are already working is an achievement that can be easily understood.

For stories that involve only simple design decisions, task planning is more about having a checklist so that nothing is forgotten. For these stories, scenarios can also be used directly as tasks, as in "Automate and implement scenario: Delivery address is captured."

Some teams might even skip creating tasks – if the company process rules allow this. When stories are small enough (and nicely decomposed into rules and examples), making an additional task board might not provide further benefits.

#### Gaspar's story: Scenarios in the sprint review

I was working on a project where the customer was not involved directly in the BDD process, or at least she was not aware of it. She knew about Scrum and regularly participated in the sprint reviews. Our review was more or less typical: we went through the stories we had done and demonstrated the new features of the application. The only thing we did differently was that before starting the demonstration of a story, we showed the related scenarios and read them out loud. This acted as an introduction to the upcoming demo. After a few sprints, I intentionally "forgot" to show her the scenarios before the demo and waited to see her reaction. I got what I wanted to hear: she was missing those "nice summaries" that helped her remember the details and give better feedback. Later, we started to use examples and scenarios in the requirement workshops as well, where they helped clear up misunderstandings before the story ever made it onto a sprint backlog.

BDD in Lean/Kanban
------------------

**Kanban** ([https://en.wikipedia.org/wiki/Kanban](https://en.wikipedia.org/wiki/Kanban)) and other lean approaches to managing software projects are also popular nowadays, especially with development teams that are responsible for operations. Kanban optimizes end-to-end delivery (**lead time**) by visualizing the workflow and limiting work in progress (**WIP**) to be able to detect and fix bottlenecks more easily.

#### Note

If you are already familiar with Scrum and you would like to learn more about Kanban, we can recommend the mini book by Henrik Kniberg and Mattias Skarin: _Kanban and Scrum - Making the Most of Both_ ([https://www.infoq.com/minibooks/kanban-scrum-minibook/](https://www.infoq.com/minibooks/kanban-scrum-minibook/)). The ebook version is available for free.

The discussion and implementation activities of the BDD approach are scoped to user stories, which are the typical work unit tracked on Kanban boards. Short, regular, or ad hoc Example Mapping sessions can be used to feed the input queues of the development team whenever capacity (the WIP limit) allows.

If the scenario automation process requires special skills or expertise, you can visualize this on the Kanban board as a separate column, if this helps to optimize the flow (for instance, if UI automation becomes a bottleneck). Be careful with this, though, because more separation of **automation** and **implementation** might reduce the positive impact of the test-driven approach we follow with BDD.

Each user story is an independent work unit, but the scenarios that illustrate its behavior can be implemented individually. BDD tasks and activities are related to the scenarios – not the story.

Actually, the _formulate_, _automate_, _implement_, _review_ and _supplementary tests_ tasks can be seen as a sub-workflow. This can, in principle, be visualized on the Kanban board. Keep in mind that less is more and make sure that this kind of tracking actually provides some benefit for your development process.

BDD in Distributed Teams
------------------------

Having a distributed team is common nowadays. On such projects, the physical distance is typically combined with time zone differences, cultural distance, and language barriers, as well.

However, BDD in distributed teams is carried out in the same way as for colocated teams. There are the additional communication challenges faced by all distributed teams, but the concrete examples produced during the requirement workshop can reduce this by providing a tangible representation of the agreed behavior of the system. Good audio-visual facilities and collaborative online tools are essential.

Providing information about the scenario implementation status (for example, with an execution report updated as part of the Continious Integration build) can lead to improved cooperation between developers, testers, and product owners. Testers and product owners can get information directly from the scenario execution reports when they need to see whether manual testing needs to be performed or whether they need to make a progress report. They don't have to wait until everyone provides status information.

### Requirement Workshops With Distributed Teams

The real challenge with distributed teams is finding some way to run the requirement workshops effectively, without losing the benefits of collaboration.

Example Mapping, which we described in the _Example Mapping In A Nutshell_ section in _Chapter 2, Structured Conversation_, uses index cards and direct communication to discover the requirement details, so some modifications will be needed for remote meetings. Let's remind ourselves of the most important characteristics of Example Mapping before considering how we might facilitate a **remote requirement workshop**:

*   Focus on rules and examples when discussing the story.
*   Nominate a facilitator who keeps the meeting going.
*   Collect results in a format that all team members can understand, so that they can challenge them if necessary.
*   Capture questions that block the discussion and make them visible to everyone.
*   Provide an easy way to have an overview of what we have discussed already.
*   Produce shared notes.

The challenge is to find a way that works for your team that still delivers these characteristics. At the time of writing this book, we are not aware of any online Example Mapping tools, but it is likely that such tools will be available soon.

Currently, the best result can be achieved by using Google Sheets that you share on screens/projectors at all locations. _Figure 4.3_ shows the same example map we showed in _Chapter 2, Structured Conversation_, using **Google Sheets** (see _Figure 2.9_ – download the template here: [http://speclink.me/examplemaptemplate](http://speclink.me/examplemaptemplate)).

Alternatively, you can use a mind mapping tool like the one shown in _Figure 4.4_, which was created using MindMup 2 ([https://www.mindmup.com/](https://www.mindmup.com/)):

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_03.jpg)

###### Figure 4.3: Example map in Google Sheets

![Figure 4.4: Example map in mindmap form
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_04.jpg)

###### Figure 4.4: Example map in mind map form

For simpler stories, you can also use a note-taking application and share it on all screens. If the application supports this, you can collapse different detail levels, so that you can still have an overview of what you have discussed so far. _Figure 4.5_ shows one such example made with Microsoft OneNote ([https://www.onenote.com/](https://www.onenote.com/)):

![Figure 4.5: Example map in the form of hierarchical notes
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_05.jpg)

###### Figure 4.5: Example map in the form of hierarchical notes

BDD In Fixed-Scope Projects
---------------------------

Projects with a fixed price, fixed scope, and fixed "everything" are definitely not ideal for agile software development, especially when we're building highly complex and sophisticated applications in a rapidly changing business environment. These applications typically have to integrate other external services and use disparate technologies. In this sort of environment, pretending that we can commit to scope, price, and time is an illusion.

Despite this, there are many examples of projects that have to operate under these constraints. Reasons include a slowly changing company culture or overly rigid project tendering rules.

Can BDD be integrated into such project environments? Can it still deliver benefits? Let's try to answer these questions.

Fixed-scope projects are typically accompanied by a detailed specification document that is supposed to describe all the necessary details to provide a cost estimate. Sometimes the specification is also used by the development team to implement the application itself.

These specification documents are of varying quality. Some go into too much detail. Others skip blithely over complex functionality with barely a mention of what's necessary to know. It's not uncommon to see both shortcomings in the same document!

Nonetheless, the estimation team studies the document and associates a price tag (man days, story points, and so on) for each function. If the price is accepted, the team has to do the hard work: implement the application on the basis of the specification document, with the constraint of the attached price tag of the individual features.

A large portion of the work is about understanding the domain and trying to provide solutions for the requirements that satisfy the customer; stay within the scope of the original, contracted specification document; and stay within budget. There will be a lot of decisions (large and small) to make, and since the team will be under the illusion that "everything was specified," they won't focus on documenting these decisions. These implicit and untracked decisions regularly lead to problems with change tracking and final acceptance.

In this situation, BDD can help to provide a frame for domain discovery and for documenting the detailed requirement decisions the team makes.

One possible approach to achieve this is to use Example Mapping to prepare individual features for development. Whenever the team is about to implement the next feature, they all study the related sections of the specification document and build an example map with all the rules and illustrative examples that they can discover. Once they have a better overview of the feature, they can match it to the expected budget and can then cut the scope if necessary. This is still very rough guesswork, of course, but at least you have a better overview of the feature so that you can make your cuts in a way that keeps the overall integrity of the feature intact. This might also include a couple of round trips to the customer, if possible. Once the scope decisions have been made, the team can progress with the development process, formulating the illustrative examples as scenarios that can drive the implementation of the feature.

As a result, you can transform the static (and probably already-outdated) specification document into a continuously validated living document. This will not solve the problems introduced by the gap between the details described in the specification document and the details that are required to implement the application, but at least it will make the decisions explicit. Living documentation offers a way to track (and correct) decisions that turn out to have been wrong, as well as providing a mechanism for managing change requests.

Once you have gained the trust of the customer – and readable living documentation is definitely a big help with that – you will have a better chance to negotiate agile contracts with them later on.

BDD In Regulated Environments
-----------------------------

Operating in a regulated environment brings a higher level of expectation for traceability. The exact requirements and goals might depend on the concrete project, but generally, the process should focus on the following areas:

*   The completeness and correctness of the specification
*   The coverage provided by the tests and the testing strategy in general
*   Evidence that the testing has been performed for a particular version

BDD provides a combined representation of the specifications and the tests. Let's look at some important characteristics of the BDD process that might be relevant for these projects:

*   The scenarios are selected initially to be illustrative examples of the specifications. The aim is to ensure consistency and shared understanding across the team.
*   The set of scenarios can be extended by further test cases using the same format to reach the coverage prescribed by the testing strategy.
*   The scenarios are business-readable, and they bring together the specification and the tests. This duality ensures a higher consistency and linkage between these areas.
*   The scenarios are strictly versioned, together with the application code.
*   BDD tools typically execute scenarios directly and produce a report of the execution result.

These statements about the BDD approach show that it is not only a good foundation for projects operating in regulated environments, but also that living documentation satisfies regulatory requirements better than classic processes. The improved efficiency comes from the fact that the scenarios are business-readable, so you don't have to maintain a separate document for the tests. The code and tests become self-documenting. If you run your automated scenarios and generate a report from the execution, this report will:

*   Document the expected behavior
*   Describe the tests that have been used to verify the behavior
*   Provide evidence of the execution results for a particular version of the product

The report generation has to be well prepared in order to meet the formal requirements of the regulators. Even though the regulator will need additional documents (such as designs, architectures, and state diagrams), BDD ensures that the most volatile part of the regulatory report is automated and integrated into the development process.

#### Agile practices are welcomed by regulators

The guidance on the use of agile practices in the development of medical device software ([https://my.aami.org/store/detail.aspx?id=TIR45-PDF](https://my.aami.org/store/detail.aspx?id=TIR45-PDF)) has been published by the Association for the Advancement of Medical Instrumentation (AAMI). Since 2013, this report has been a part of the recognized standards ([https://www.federalregister.gov/documents/2013/01/15/2013-00605/food-and-drug-administration-modernization-act-of-1997-modifications-to-the-list-of-recognized](https://www.federalregister.gov/documents/2013/01/15/2013-00605/food-and-drug-administration-modernization-act-of-1997-modifications-to-the-list-of-recognized)) by the U.S. Food and Drug Administration (FDA).

The report addresses the usage of executable requirements in the regulated context (_Section 3.6.5_):

"The challenge comes with providing a reviewable requirements documentation package to regulators. A team must ensure the readability of whatever requirements are pulled from the set of EXECUTABLE REQUIREMENTS. Use of formal, more English-like words in the requirements definition will facilitate this readability, as will the use of tools to package and organize requirements into a comprehensible outline.

EXECUTABLE REQUIREMENTS can be used as part of a final requirements documentation mechanism."

What We Just Learned
--------------------

BDD is a straightforward set of practices that, when combined, can significantly improve the quality of your team's development process. In this chapter, we expanded on a high-level view of the BDD approach to see the different activities that you'll work through. We looked at when each of these activities is suitable and which team members should be involved.

Because we understand that your teams differ, we looked at how BDD integrates with various common development methodologies and team configurations. There are more ways of working than Scrum and Kanban, but with an understanding of them, you should be able to see how to adapt the BDD approach to your workplace. Whether you're working in a perfect agile fairyland or struggling with fixed-price projects, you've seen how BDD can fit in.

We also discussed how, with appropriate technological support, BDD can work well for distributed teams, acting as an aid to collaboration. The unambiguous feature files act as a single source of truth that can ease the difficulties experienced when working across geographies and time zones, as so many of us do.

Every organization is different, though, so treat the approaches described in this chapter as starting points and refine them in your retrospectives until they fit your team perfectly.


Introduction
------------

In the previous chapters, we discussed the importance of collaboration for a **Behaviour Driven Development** (**BDD**) approach to be successful. In this chapter, we will show how BDD can be integrated into the development process and we'll also answer some common questions, such as "Who should write the scenarios?", "Who do we need to participate in requirement workshops?", and "Should the testers or the developers automate the scenarios?".

In this chapter, we're going to describe the BDD approach in more detail than we have previously. We'll also provide some examples of how BDD has been successfully adopted by various organizations using different development processes. Don't treat these examples as best practice checklists, but rather as starting points that allow you to develop a process that fits your project.

Remember that every project is different. Every project will follow different development processes (such as **Scrum** or **Kanban**). These processes are integrated into the culture of a company that has its own definition of what each role is responsible for. For example, how much development skills should a tester have? Individual team members will have different backgrounds and personalities.

The most successful projects consider all these factors when defining their development process (and understand that this process has to be reviewed and adapted as necessary).


The BDD Approach
----------------

To be able to discuss how to integrate BDD into your development process, let's look at the BDD approach in detail and list the different tasks and activities that are typically involved.

You probably remember the high-level overview of the BDD approach that we provided in _Chapter 1, What Is BDD?_:

![Figure 4.1: High-level overview of BDD approach](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_01.jpg)

###### Figure 4.1: High-level overview of BDD approach

In practice, the BDD approach is more complex and consists of several connected activities, which we will discuss in detail. To get started, take a look at the following diagram:

![Figure 4.2: Tasks and activities in the BDD approach
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_02.jpg)

###### Figure 4.2: Tasks and activities in the BDD approach

The following list contains a brief overview of these activities. In the list, we describe the ideal timing, the team members involved, and also the expected outcome:

1.  **Pick a user story**:
    
    **What**: Requirements elicitation and prioritization.
    
    **When**: Before the requirements workshop – preferably at least a day in advance.
    
    **Who**: The product owner, business analyst, customer, and key stakeholders.
    
    **Outcome**: A candidate user story, scoped with relevant business rules (acceptance criteria). There should be enough detail to allow the development team to explore the scope of the story using concrete examples.
    
2.  **Requirement workshop:**
    
    **What**: Discuss the user story by focusing on rules and examples.
    
    **When**: Regularly throughout the project – running short workshops several times a week is recommended.
    
    **Who**: All roles must be represented at this meeting (at least the three amigos), but multiple representatives of each role can attend. As we described in the _How to establish structured conversations_ section in _Chapter 2, Structured Conversation_, each role representative has their own responsibility and focus.
    
    **Outcome**: The candidate story is refined and is frequently decomposed into smaller stories, each accompanied by a set of rules and examples. The examples should be captured in as light a format as possible, and should not be written using _Given_/_When_/_Then_.
    
3.  **Formulate:**
    
    **What**: Formulate the examples into scenarios.
    
    **When**: Before the implementation of the story starts. Best done as the first task of development, but sometimes done as a separate workshop where all scenarios scheduled for the iteration are formulated.
    
    **Who**: In the beginning, when the language and style we use to phrase scenarios are still being established, it is recommended to do it with the entire team. Later, it can be efficiently done by a pair: a developer (or someone who is responsible for the automation) and a tester (or someone who is responsible for quality), as long as their output is actively reviewed by a business representative.
    
    **Outcome**: Scenarios added to the source control. The language of scenarios is business-readable and consistent.
    
4.  **Review:**
    
    **What**: Review scenarios to ensure they correctly describe the expected business behavior.
    
    **When**: Whenever a scenario is written or modified.
    
    **Who**: The product owner (and maybe a business analyst, the customer, and key stakeholders).
    
    **Outcome**: Confidence that the development team has correctly understood the requirements of the business and that the behavior is expressed using appropriate terminology.
    
    #### Seb's story: Handgun in carry-on luggage
    
    I was going through security at the airport and the security guard called me over after my carry-on luggage had been X-rayed. "Sir", he said, "there appears to be a handgun in your luggage." I was very surprised. I don't usually travel with a handgun!
    
    It turns out that watching X-rays of other people's luggage is not the world's most interesting job. To keep security guards alert, the software randomly superimposes the image of a forbidden item on the X-ray.
    
    Reviewing scenarios is an important job, and it's the job of those who write scenarios to make sure that they are interesting enough to keep their business colleagues eager to review them. It's all too easy to write verbose, repetitive scenarios that are difficult and boring to read. When this happens, you might just get a short review response, such as "Looks fine to me."
    
    To check that scenarios really are interesting enough to read, occasionally leave one out (or add an incorrect one). If you don't get feedback on your deliberate mistake, it probably means that you need to work with your business to understand what level of detail they are interested in having documented.
    
5.  **Automate**
    
    **What**: Automate scenarios by writing test automation code.
    
    **When**: Automate scenarios before starting the implementation, following a test-driven approach. This way, the implementation can be "driven" by scenarios, so the application will be designed for testability and the development team will have a greater focus on real outcomes.
    
    Some teams do the automation task separately or even (especially when the application is only automated through the UI) after the implementation is finished. This approach reduces the advantages of BDD, but the end result might still be better than doing ad hoc integration testing or no testing at all. You may find yourself working in this way as a part of a cultural change, but try not to get stuck here.
    
    **Who**: Developers or test automation experts. When doing pair programming, pairing a developer with a tester works well.
    
    Whether scenarios should be automated by developers or testers is very dependent on the company culture and the team setup. It is definitely true that for some complex, design-related aspects of the test automation infrastructure, developers are necessary. On the other hand, a good automation infrastructure may enable team members with less coding experience to perform automation tasks.
    
    **Outcome**: A set of (failing) automated scenarios that can be executed both locally and in continuous integration/delivery/deployment environments.
    
6.  **Implement**
    
    **What**: Implement the application code to make the automated scenarios pass. We show this as the classic Test Driven Development (TDD) cycle of Red/Green/Refactor, with programmer tests driving the implementation.
    
    **When**: Implementation starts as soon as the first scenario has been automated, so the implementation is being driven by a failing scenario.
    
    **Who**: Developers.
    
    **Outcome**: A working application that behaves as specified. This can be verified automatically.
    
7.  **Supplementary tests**
    
    **What**: Perform manual testing and other forms of testing described in your testing strategy. This can include scripted testing, manual testing, exploratory testing, performance testing, security testing, or some other type of testing. For more details, see quadrants 3 and 4 of the _Agile Testing Quadrants_ ([http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/](http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/)).
    
    **When**: You don't have to wait until an entire story is finished. Scenarios provide a functional breakdown of the user story, so each scenario itself contributes a meaningful part of the application's behavior. Therefore, as soon as there is a completed scenario, testing activities can start. (Test preparation can start even earlier, of course.)
    
    **Who**: Testers – other team members can help with some aspects of testing, but these activities are usually coordinated by testers.
    
    **Outcome**: A high-quality working application; the story is done.
    
8.  **Release**
    
    **What**: Produce a potentially shippable increment. This is the end of our cycle, but a released product should be used to gather feedback from users, which can provide input for future development cycles – although this is out of scope for this book.
    
    **When**: At any time that all tests are passing, but especially at the end of an iteration.
    
    **Who**: The development team will be responsible for producing the releasable artifacts, but there may be specialized teams that create the actual release package.
    
    **Outcome**: An installable release package.
    


BDD in Scrum
------------

Now let's take a look at a few examples of BDD being integrated into different development process models. We'll start with the most commonly used agile methodology, the Scrum framework. BDD works very well with Scrum, although many people seem to be surprised by this.

In Scrum, work is organized into sprints that are 2-4 week iterations. There are regular workshops that focus on the customer's requirements throughout each sprint (involving backlog refinement – Scrum no longer uses the term **backlog grooming**, replacing the word grooming with **refinement** – sprint planning preparation, and sprint planning) where user stories are prepared. At the sprint planning meeting, the team chooses a few stories to implement in the upcoming sprint. Once the sprint is done, the team presents its results in a sprint review/demo and potential process improvements are discussed in the sprint retrospective.

### Requirement Workshops

Since a sprint is relatively short, and the number of stories the team usually has to deliver is small, the team can get a good overview and understanding of all the stories in the sprint backlog.

As previously mentioned, Scrum involves regular meetings focused on customer requirements where user stories are prepared (backlog refinement and sprint planning preparation). This culminates in the sprint planning meeting, where the team finally commits to the details. When doing BDD, we explore and discover the details of stories at these meetings.

This can be achieved with the help of structured conversations (_Chapter 2, Structured Conversation_) and an appropriate technique, such as Example Mapping (_the_ _Example Mapping In A Nutshell section in Chapter 2, Structured Conversation)_.

If the team has good access to the product owner, we recommend that you organize short Example Mapping sessions regularly, and have these replace backlog refinement meetings. You can hold them weekly, but you might consider scheduling them several times a week, or even daily. This enables a product owner to get feedback quickly from the team regarding a new idea and removes the need for informal communication (such as email threads and water-cooler conversations), where any decisions made can easily be lost or forgotten. Short, daily meetings have a lot of advantages and you can always cancel a session when your team has prepared enough stories for the next sprint.

Examples help us focus on the outcomes, even during early discussions, which improves the effectiveness of communication. If you use Example Mapping, you will spend less time on unstructured discussions, jumping between topics and re-discussing questions that cannot be answered at the meeting. Of course, Example Mapping does not make complex problems simple, but your time in the session will be spent on valuable discussions.

#### Gaspar's story: BDD works even when access to your product owner is limited

I worked on a complex legacy project, where we were committed to capturing scenarios for new features. The customer was an agile IT company and they had lots of experience with Scrum.

The domain was new to us and access to the product owner was limited. We were prepared for long and exhausting sprint planning meetings, but surprisingly, we were able to finish these meetings early, sprint after sprint.

After one of these meetings, the product owner turned to me and asked: "How do you manage to complete the sprint planning meeting so quickly? Other ones that I've been to are much longer and never finish on time."

I could not really answer him at the time, because we were not intentionally doing anything special. (This was years before Example Mapping.) However, after analyzing our meetings, we realized that our commitment to writing scenarios made us focus on examples during the discussion. We did this to make it easier to formulate scenarios later, but a side effect was that our meetings were more structured and achieved their goal more quickly.

If access to the product owner is limited, as in Gaspar's story, you can still integrate structured conversations and Example Mapping into the sprint planning meeting.

### Formulate

Formulating an example as a scenario is tricky. It involves decisions about which word to use, how to construct a phrase, and what verb tense to use. This can take a long time.

Establishing a shared understanding is important, but making the entire team discuss the best way to express a scenario in business language is not efficient. So, generally, we would not recommend formulating scenarios during preparation or planning meetings.

In Scrum, the best approach to formulating scenarios is to include it as a task in the story's implementation pipeline. This means that the first task on the task board for a story should be the following: formulate the examples of the story as scenarios and add them to the source control. If the story is related to an area of the application where the team has no automation experience, you should consider only formulating a few representative examples into scenarios, so that you can check that their phrasing is convenient for automation. While automating these scenarios, you will learn more about the solution design and you can incorporate this knowledge into the formulation of the remaining scenarios.

Formulation is usually undertaken by a pair, often a developer and a tester. This makes it simpler to fit formulation into the sprint schedule and limits its cost, and the subsequent review by the product owner ensures that the delivery team members really have understood what the business is asking of them.

We have seen teams doing formulation as a special workshop right after sprint planning (that is, on the day following the sprint planning day), where the entire team is split into smaller working groups, working on the formulation of the examples of all stories. Once the smaller groups have finished their work, the team discusses the results together. Although such workshops might be useful in the initial phase, when you learn about BDD and the domain language, it might put quite a significant administrative overhead on the team (yet another fixed day where everyone is expected to be present).

In some projects, the scenarios have to be formally approved by the product owner or someone else. In these cases, the formulation has to be prioritized and planned in a way that means the team does not get blocked.

### How Scenarios Help With The Decomposition Of Stories Into Tasks

In Scrum, stories are usually broken down into tasks. Tasks are work units that represent the design decisions of the team and they are also used to track the daily progress of the team.

The tasks are owned by the development team. The team can list anything as a task that needs to be completed to be able to finish a story. The tasks are often very technical (such as to create a **Users** table) and do not have to be understandable by the product owner.

Examples and scenarios are the opposite – they describe a functional breakdown of the story and they are business-readable. Because of this, it initially seems like BDD has nothing to do with Scrum tasks and task planning. The reality is somewhat different, though. Once you have illustrated the story with a couple of key examples, task planning becomes easier. The key examples paint the big picture and reveal the design decisions that need to be made.

Tasks are usually technical, but where practical, you should try to create them so that each one relates to a single example (scenario), as in "Create tables for capturing the delivery address" instead of a generic **Create tables** task. This is not possible for all tasks – there might be some tasks on which several scenarios depend.

By aligning tasks with scenarios, the development team will realize several benefits:

*   The team will focus on the expected behavior during the implementation. This can help avoid "gold-plating" or implementing infrastructures that are not needed. Starting from the scenario helps follow an **outside-in** development approach ([https://en.wikipedia.org/wiki/Outside%E2%80%93in\_software\_development](https://en.wikipedia.org/wiki/Outside%E2%80%93in_software_development)).
*   You can get feedback about the story implementation earlier. Imagine you have a half-done story where all the database tables are created, but nothing is visible to the users. Now compare that with a half-done story where three of the seven scenarios are already implemented end to end. The latter can be shown to the product owner to get feedback on what has been implemented so far.
*   Manual testing can be started before the story is fully implemented. The execution report of the story scenarios will show which functional parts of the story are ready for testing, so testers do not require status reports to be created.
*   The functional progress provides better transparency and hence increases the trust between the development team and the product owner. A progress status of 57% means nothing, but demonstrating that three scenarios out of seven are already working is an achievement that can be easily understood.

For stories that involve only simple design decisions, task planning is more about having a checklist so that nothing is forgotten. For these stories, scenarios can also be used directly as tasks, as in "Automate and implement scenario: Delivery address is captured."

Some teams might even skip creating tasks – if the company process rules allow this. When stories are small enough (and nicely decomposed into rules and examples), making an additional task board might not provide further benefits.

#### Gaspar's story: Scenarios in the sprint review

I was working on a project where the customer was not involved directly in the BDD process, or at least she was not aware of it. She knew about Scrum and regularly participated in the sprint reviews. Our review was more or less typical: we went through the stories we had done and demonstrated the new features of the application. The only thing we did differently was that before starting the demonstration of a story, we showed the related scenarios and read them out loud. This acted as an introduction to the upcoming demo. After a few sprints, I intentionally "forgot" to show her the scenarios before the demo and waited to see her reaction. I got what I wanted to hear: she was missing those "nice summaries" that helped her remember the details and give better feedback. Later, we started to use examples and scenarios in the requirement workshops as well, where they helped clear up misunderstandings before the story ever made it onto a sprint backlog.


BDD in Lean/Kanban
------------------

**Kanban** ([https://en.wikipedia.org/wiki/Kanban](https://en.wikipedia.org/wiki/Kanban)) and other lean approaches to managing software projects are also popular nowadays, especially with development teams that are responsible for operations. Kanban optimizes end-to-end delivery (**lead time**) by visualizing the workflow and limiting work in progress (**WIP**) to be able to detect and fix bottlenecks more easily.

#### Note

If you are already familiar with Scrum and you would like to learn more about Kanban, we can recommend the mini book by Henrik Kniberg and Mattias Skarin: _Kanban and Scrum - Making the Most of Both_ ([https://www.infoq.com/minibooks/kanban-scrum-minibook/](https://www.infoq.com/minibooks/kanban-scrum-minibook/)). The ebook version is available for free.

The discussion and implementation activities of the BDD approach are scoped to user stories, which are the typical work unit tracked on Kanban boards. Short, regular, or ad hoc Example Mapping sessions can be used to feed the input queues of the development team whenever capacity (the WIP limit) allows.

If the scenario automation process requires special skills or expertise, you can visualize this on the Kanban board as a separate column, if this helps to optimize the flow (for instance, if UI automation becomes a bottleneck). Be careful with this, though, because more separation of **automation** and **implementation** might reduce the positive impact of the test-driven approach we follow with BDD.

Each user story is an independent work unit, but the scenarios that illustrate its behavior can be implemented individually. BDD tasks and activities are related to the scenarios – not the story.

Actually, the _formulate_, _automate_, _implement_, _review_ and _supplementary tests_ tasks can be seen as a sub-workflow. This can, in principle, be visualized on the Kanban board. Keep in mind that less is more and make sure that this kind of tracking actually provides some benefit for your development process.


BDD in Distributed Teams
------------------------

Having a distributed team is common nowadays. On such projects, the physical distance is typically combined with time zone differences, cultural distance, and language barriers, as well.

However, BDD in distributed teams is carried out in the same way as for colocated teams. There are the additional communication challenges faced by all distributed teams, but the concrete examples produced during the requirement workshop can reduce this by providing a tangible representation of the agreed behavior of the system. Good audio-visual facilities and collaborative online tools are essential.

Providing information about the scenario implementation status (for example, with an execution report updated as part of the Continious Integration build) can lead to improved cooperation between developers, testers, and product owners. Testers and product owners can get information directly from the scenario execution reports when they need to see whether manual testing needs to be performed or whether they need to make a progress report. They don't have to wait until everyone provides status information.

### Requirement Workshops With Distributed Teams

The real challenge with distributed teams is finding some way to run the requirement workshops effectively, without losing the benefits of collaboration.

Example Mapping, which we described in the _Example Mapping In A Nutshell_ section in _Chapter 2, Structured Conversation_, uses index cards and direct communication to discover the requirement details, so some modifications will be needed for remote meetings. Let's remind ourselves of the most important characteristics of Example Mapping before considering how we might facilitate a **remote requirement workshop**:

*   Focus on rules and examples when discussing the story.
*   Nominate a facilitator who keeps the meeting going.
*   Collect results in a format that all team members can understand, so that they can challenge them if necessary.
*   Capture questions that block the discussion and make them visible to everyone.
*   Provide an easy way to have an overview of what we have discussed already.
*   Produce shared notes.

The challenge is to find a way that works for your team that still delivers these characteristics. At the time of writing this book, we are not aware of any online Example Mapping tools, but it is likely that such tools will be available soon.

Currently, the best result can be achieved by using Google Sheets that you share on screens/projectors at all locations. _Figure 4.3_ shows the same example map we showed in _Chapter 2, Structured Conversation_, using **Google Sheets** (see _Figure 2.9_ – download the template here: [http://speclink.me/examplemaptemplate](http://speclink.me/examplemaptemplate)).

Alternatively, you can use a mind mapping tool like the one shown in _Figure 4.4_, which was created using MindMup 2 ([https://www.mindmup.com/](https://www.mindmup.com/)):

![](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_03.jpg)

###### Figure 4.3: Example map in Google Sheets

![Figure 4.4: Example map in mindmap form
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_04.jpg)

###### Figure 4.4: Example map in mind map form

For simpler stories, you can also use a note-taking application and share it on all screens. If the application supports this, you can collapse different detail levels, so that you can still have an overview of what you have discussed so far. _Figure 4.5_ shows one such example made with Microsoft OneNote ([https://www.onenote.com/](https://www.onenote.com/)):

![Figure 4.5: Example map in the form of hierarchical notes
](https://static.packt-cdn.com/products/9781839211829/graphics/B15341_04_05.jpg)

###### Figure 4.5: Example map in the form of hierarchical notes


BDD In Fixed-Scope Projects
---------------------------

Projects with a fixed price, fixed scope, and fixed "everything" are definitely not ideal for agile software development, especially when we're building highly complex and sophisticated applications in a rapidly changing business environment. These applications typically have to integrate other external services and use disparate technologies. In this sort of environment, pretending that we can commit to scope, price, and time is an illusion.

Despite this, there are many examples of projects that have to operate under these constraints. Reasons include a slowly changing company culture or overly rigid project tendering rules.

Can BDD be integrated into such project environments? Can it still deliver benefits? Let's try to answer these questions.

Fixed-scope projects are typically accompanied by a detailed specification document that is supposed to describe all the necessary details to provide a cost estimate. Sometimes the specification is also used by the development team to implement the application itself.

These specification documents are of varying quality. Some go into too much detail. Others skip blithely over complex functionality with barely a mention of what's necessary to know. It's not uncommon to see both shortcomings in the same document!

Nonetheless, the estimation team studies the document and associates a price tag (man days, story points, and so on) for each function. If the price is accepted, the team has to do the hard work: implement the application on the basis of the specification document, with the constraint of the attached price tag of the individual features.

A large portion of the work is about understanding the domain and trying to provide solutions for the requirements that satisfy the customer; stay within the scope of the original, contracted specification document; and stay within budget. There will be a lot of decisions (large and small) to make, and since the team will be under the illusion that "everything was specified," they won't focus on documenting these decisions. These implicit and untracked decisions regularly lead to problems with change tracking and final acceptance.

In this situation, BDD can help to provide a frame for domain discovery and for documenting the detailed requirement decisions the team makes.

One possible approach to achieve this is to use Example Mapping to prepare individual features for development. Whenever the team is about to implement the next feature, they all study the related sections of the specification document and build an example map with all the rules and illustrative examples that they can discover. Once they have a better overview of the feature, they can match it to the expected budget and can then cut the scope if necessary. This is still very rough guesswork, of course, but at least you have a better overview of the feature so that you can make your cuts in a way that keeps the overall integrity of the feature intact. This might also include a couple of round trips to the customer, if possible. Once the scope decisions have been made, the team can progress with the development process, formulating the illustrative examples as scenarios that can drive the implementation of the feature.

As a result, you can transform the static (and probably already-outdated) specification document into a continuously validated living document. This will not solve the problems introduced by the gap between the details described in the specification document and the details that are required to implement the application, but at least it will make the decisions explicit. Living documentation offers a way to track (and correct) decisions that turn out to have been wrong, as well as providing a mechanism for managing change requests.

Once you have gained the trust of the customer – and readable living documentation is definitely a big help with that – you will have a better chance to negotiate agile contracts with them later on.


BDD In Regulated Environments
-----------------------------

Operating in a regulated environment brings a higher level of expectation for traceability. The exact requirements and goals might depend on the concrete project, but generally, the process should focus on the following areas:

*   The completeness and correctness of the specification
*   The coverage provided by the tests and the testing strategy in general
*   Evidence that the testing has been performed for a particular version

BDD provides a combined representation of the specifications and the tests. Let's look at some important characteristics of the BDD process that might be relevant for these projects:

*   The scenarios are selected initially to be illustrative examples of the specifications. The aim is to ensure consistency and shared understanding across the team.
*   The set of scenarios can be extended by further test cases using the same format to reach the coverage prescribed by the testing strategy.
*   The scenarios are business-readable, and they bring together the specification and the tests. This duality ensures a higher consistency and linkage between these areas.
*   The scenarios are strictly versioned, together with the application code.
*   BDD tools typically execute scenarios directly and produce a report of the execution result.

These statements about the BDD approach show that it is not only a good foundation for projects operating in regulated environments, but also that living documentation satisfies regulatory requirements better than classic processes. The improved efficiency comes from the fact that the scenarios are business-readable, so you don't have to maintain a separate document for the tests. The code and tests become self-documenting. If you run your automated scenarios and generate a report from the execution, this report will:

*   Document the expected behavior
*   Describe the tests that have been used to verify the behavior
*   Provide evidence of the execution results for a particular version of the product

The report generation has to be well prepared in order to meet the formal requirements of the regulators. Even though the regulator will need additional documents (such as designs, architectures, and state diagrams), BDD ensures that the most volatile part of the regulatory report is automated and integrated into the development process.

#### Agile practices are welcomed by regulators

The guidance on the use of agile practices in the development of medical device software ([https://my.aami.org/store/detail.aspx?id=TIR45-PDF](https://my.aami.org/store/detail.aspx?id=TIR45-PDF)) has been published by the Association for the Advancement of Medical Instrumentation (AAMI). Since 2013, this report has been a part of the recognized standards ([https://www.federalregister.gov/documents/2013/01/15/2013-00605/food-and-drug-administration-modernization-act-of-1997-modifications-to-the-list-of-recognized](https://www.federalregister.gov/documents/2013/01/15/2013-00605/food-and-drug-administration-modernization-act-of-1997-modifications-to-the-list-of-recognized)) by the U.S. Food and Drug Administration (FDA).

The report addresses the usage of executable requirements in the regulated context (_Section 3.6.5_):

"The challenge comes with providing a reviewable requirements documentation package to regulators. A team must ensure the readability of whatever requirements are pulled from the set of EXECUTABLE REQUIREMENTS. Use of formal, more English-like words in the requirements definition will facilitate this readability, as will the use of tools to package and organize requirements into a comprehensible outline.

EXECUTABLE REQUIREMENTS can be used as part of a final requirements documentation mechanism."


What We Just Learned
--------------------

BDD is a straightforward set of practices that, when combined, can significantly improve the quality of your team's development process. In this chapter, we expanded on a high-level view of the BDD approach to see the different activities that you'll work through. We looked at when each of these activities is suitable and which team members should be involved.

Because we understand that your teams differ, we looked at how BDD integrates with various common development methodologies and team configurations. There are more ways of working than Scrum and Kanban, but with an understanding of them, you should be able to see how to adapt the BDD approach to your workplace. Whether you're working in a perfect agile fairyland or struggling with fixed-price projects, you've seen how BDD can fit in.

We also discussed how, with appropriate technological support, BDD can work well for distributed teams, acting as an aid to collaboration. The unambiguous feature files act as a single source of truth that can ease the difficulties experienced when working across geographies and time zones, as so many of us do.

Every organization is different, though, so treat the approaches described in this chapter as starting points and refine them in your retrospectives until they fit your team perfectly.


Chapter 5. How to Get Business Involved
=======================================

Introduction
------------

We have already explained how the most important element of **Behavior Driven Development** (BDD) is collaboration. Collaboration means that team members with different roles work together to deliver working software. A team will include both the business (including the product owners, project sponsors, business analysts, and so on) and technical personnel (such as developers, testers, UX experts, and operation staff). It's a common mistake to focus just on collaboration between delivery team members.

In this chapter, we would like to share our experiences of getting business representatives fully involved in the BDD approach and talk about what kind of challenges they might face. You'll see that we believe the key to successfully adopting BDD is to demonstrate to the business the value of collaborating with the delivery team. There is no fixed recipe for this – you'll need to develop and refine your strategy depending on your project's context.

"_The proof of the pudding is in the eating_" – in the end, seeing the immense value that results from practicing real collaboration is the only way to demonstrate that BDD can work in your context. Our aim is to give your team enough enthusiasm to give BDD a try.

Learn From Your Peers
---------------------

The key benefits typically attributed to BDD are:

*   Reduced cycle time
*   Reduced rework/rejections
*   A reduced number of production issues
*   Keeping the implementation costs of new features under control

Although we provided reasoning that supported these benefits, nothing is more convincing than learning about existing projects that have applied BDD successfully. One way of doing this is to talk to people who have actually participated in a successful BDD project. The best places to meet these people are conferences and user groups.

The One Where The Business Is Not Involved
------------------------------------------

Often, the BDD approach is introduced by the team or vendor that is responsible for delivering the solution. The business has probably not been involved in the BDD approach from the start. They might not have even heard of BDD. In these cases, the team needs to find a way to sell BDD to them, by convincing them that their participation in this approach will help to deliver better results.

If you have ever tried to sell a new method or process to the business (especially one with a **TLA** – a **Three-Letter Acronym**), you'll know that this can be challenging. The business might:

*   Have a default resistance to new methodologies
*   See this approach as an overhead
*   Be afraid of learning and infrastructure costs
*   Have formal or legal distance from the team (for instance, the business representative may be a part of the customer, not the vendor)
*   See BDD as a testing or development technique

In some situations, teams might try to apply BDD without involving the business. This is sometimes called **developer-only BDD**, or **tester-only BDD**, and should be considered a Bad Thing™. A lot of teams and projects claim to practice BDD without involving the business, and some of them seem to be happy with this. This is because collaborating at the development team level can still introduce clear guidance for how testing and test automation should be performed. Having this approach in place is better than an ad-hoc, chaotic testing strategy, but it does not deliver the massive benefits that are available by involving the business as well.

#### Seb's story: You keep using BDD; I do not think it means what you think it means

I've visited a lot of teams that don't have the business involved in BDD. We have charitably described this as "developer-only", or "tester-only", BDD, but I tend to think of people following this as not following BDD at all. At best, they are using tools that were designed to support collaboration as expensive test automation platforms. The outcome is usually suites of automated tests that are slow to execute, hard to maintain, and of limited value to the organization. They would get more value from dedicated test automation tools.

BDD is about collaboration. Using a BDD tool, or automating tests using _Given_ _When_ _Then_, doesn't make your development approach BDD in the slightest.

Without the business involved, unless the team is very business-focused and disciplined, the scenarios become technical, data-driven, and dry. This means that the business gets very little value from reading the scenarios and, consequently, won't understand the implication of a failing scenario. This removes the possibility that the scenarios will provide a constructive feedback loop between the business and delivery team – so the scenarios become an overhead.

As we said earlier, the way BDD can win for the business depends on the project context. In some cases, developer/tester-only BDD can be a step in this strategy. With the systematic, business-focused application of BDD, you can gather enough knowledge and examples to demonstrate the benefits of BDD to the business, thereby giving you a better chance of convincing the business.

If you happen to be in a situation where you practice BDD but your business is not involved (yet), consider the following advice:

*   Consider your situation as a temporary solution that you can use as a step towards full collaboration.
*   Think about your scenarios as business examples. Try to imagine how the business would explain the "story" behind the scenario. Use realistic data and business-readable phrases. Testers can be a big help in this, as they typically act as a mediator between the requirements and the solution.
*   Try to focus your detailed requirement discussions on examples. The business does not have to know that you're practicing BDD. "Could you please give a concrete example!" is a valid question in any process.
*   Present your results and methods to the business regularly and watch their reactions to figure out which aspects of BDD they find most useful. (Gaspar's story in the _BDD in Scrum_ section in _Chapter 4, Who Does What and When_, about showing scenarios in the sprint review is a good example of this.)

We've worked with many teams that initially resisted adopting a BDD approach, hearing "We cannot apply BDD, because our business does not want to be involved." You could try following a BDD approach without business involvement, as a first step – you'll get all the benefits we've outlined and, in time, your business colleagues will come to appreciate the value of expressing the acceptance criteria as plain-English scenarios.

BDD Is For Solving Problems
---------------------------

Once you are into the daily routine of BDD, you could explain it to your product owner in a way that highlights Example Mapping, formulation, and automation. Or, you could explain the BDD as a process, as we did in _Chapter 4, Who Does What and When_.

This might work for some people; however, presenting BDD in this way doesn't seem to be very appealing when talking to business team members. The problem is similar to one that we come across on a daily basis: focusing on the solution instead of the problem itself. BDD has no value unless it is helping you to solve problems, improve development efficiency, and produce better results. In order to get your business colleagues engaged, you have to find the pain points (or opportunities) that exist in your current process. If there are no problems and everything is just perfect, there is no need to introduce BDD.

Identifying these challenges is an important first achievement, from which you can build up sound justification for trying alternative approaches. It is impossible to enumerate all the different kinds of problems or challenges your project might face, but the following section provides a brief list of typical issues and the solutions that BDD can provide.

### The Product Owner Is Overloaded

This might sound counter-intuitive, but BDD can help reduce the product owner's workload.

The lack of business availability is a common counter-argument to adopting BDD. "If they are already overloaded, increasing their level of collaboration would make them even more so" is a typical response, but it doesn't have to be that way. Regardless of whether you use BDD or not, in the end, the product owner has to provide the input that is needed to implement the application. Our goal with BDD is to improve communication efficiency by focusing on early, direct communication with the business, ensuring fewer misunderstandings and less rework. The following list compares the activities that product owners spend their time on in BDD and classic agile development.

BDD product owner activities:

*   Participating in requirement workshops (such as Example Mapping)
*   Reviewing scenarios
*   Giving feedback regarding the application implemented

Classic product owner activities:

*   Writing specifications
*   Presenting the stories to the team
*   Discussing ad-hoc questions during implementation
*   Collecting deviations from the expected result in the sprint review
*   Managing and prioritizing requirement-related bugs

If you compare the collaboration time needed from the product owner with the efforts required in a classic development process, you can see that although BDD needs time to be spent on collaborating and reviewing, we avoid discussing the same topics over and over again and the work is distributed throughout the team (for example, scenarios written by the team replace the written specification).

### Production Issues Are Common

Production issues are costly: as determined by an IBM study ([ftp://ftp.software.ibm.com/software/rational/info/do-more/RAW14109USEN.pdf](ftp://ftp.software.ibm.com/software/rational/info/do-more/RAW14109USEN.pdf)), the cost of a production issue is 30 times higher than "fixing" the same issue during the preparation phase. They are not only costly to fix, but they can easily result in customer dissatisfaction and mistrust.

In the _What about testing?_ section in _Chapter 1, What Is BDD?_ we described the relationship between BDD and testing: our goal is to prevent production issues being introduced during requirement analysis and achieve detailed specification. The resulting reduction in production issues is the most easily measurable benefit of applying the BDD approach.

If production issues are common in your project, you need to take immediate steps to improve the situation. While the problem will probably need to be addressed from several angles, introducing BDD can certainly contribute to the ultimate solution.

### It Is Hard To Get The Product To A Deliverable State

There is a huge, frequently underestimated gap between implementing a feature and bringing it to a releasable state. There are a lot of "smallish tasks" you need to take care of, such as creating deployment packages, updating user documentation, and verifying performance requirements. Experience shows that these tasks are often deferred until the story (or release) is "almost done." Since the effort required for these activities is usually underestimated, the result is functionality that can be (partially) demonstrated, but still can't be released to users.

To ensure that the application can be reliably released at short notice, the team should follow the **Continuous Delivery** (**CD**) approach. CD requires the team to work on the application in short cycles, where each cycle contains all the steps necessary to make the application deliverable. Since these cycles might be really short (often shorter than a day), a high level of automation is required to perform the necessary verification and packaging steps.

#### Seb's story: Delivery is not deployment

CD could stand for either Continuous Delivery or Continuous Deployment – these are not the same thing. Just because an application is in a deliverable state does not necessarily mean that you will release it to end users. Whether a particular deliverable is released or not is a business decision, not simply a quality control decision.

The process that automatically builds, tests, and packages each product increment as a potential deliverable is called continuous delivery. The process that also automatically releases each deliverable to end users is called continuous deployment.

Continuous deployment is not necessarily applicable to all kinds of applications, but continuous delivery can be applied to all projects.

To move toward CD, stories should be sliced up into very small chunks. In Scrum, the implementation of a feature or a user story is broken down to technical implementation tasks. Sometimes, teams adopt an inadvisable approach called **horizontal slicing**, where tasks are defined along the different layers of the application (as in "implement the data access layer for the story"). If the story is broken down in this way, the application can only reach a deliverable state when all tasks are done and the entire story is finished.

The scenarios we use in BDD provide a functional breakdown of the story. Every scenario represents a part of the expected behavior and makes sense on its own (**vertical slicing**). Even better, each scenario can act as a work unit (see the _BDD in Scrum_ section in _Chapter 4, Who Does What and When_). If you routinely include the "smallish tasks" in the implementation of every scenario, you will keep the application in a releasable state. Now, you're well placed to adopt CD, or even continuous deployment.

### It Is Hard To Get Customers Engaged With The Product

Nothing is more frustrating than delivering a good quality product that is not appreciated or used by end users. While there may be many reasons behind this, it can indicate a development process that does not focus on user value. You might be in this situation because your project organizes work using horizontal slicing and technical stories ([http://www.innolution.com/resources/glossary/technical-stories](http://www.innolution.com/resources/glossary/technical-stories)).

Since BDD encourages the team to focus on realistic examples of application behavior, the product tends to evolve in line with the user's viewpoint. Also, the collaboration techniques used by BDD can help UX experts get involved early in the design phase.

### Deadlines Are Often Missed

Deadlines, at least those ones you can miss, are set based upon an estimate of how long it will take to deliver the set of required features (the scope). However, as the name implies, estimates are just an estimation. They can be wrong... and often are. If the scope to be reached is fixed, there is not much you can do to meet the deadline if the estimate was wrong. You can force the team to work overtime, or you can allocate more staff, but these methods rarely provide an effective long-term solution.

The key to the successful management of deadlines is to allow more flexibility in the scope: "Try to incorporate as much value as we can for the given deadline."

BDD will not tell you how to cut the scope, but it gives you a framework for enabling functional cuts, even within a user story. Scenarios provide a functional breakdown of the story and give you the opportunity to reduce the scope by identifying and deferring lower-priority behaviors when you are under time pressure.

### Hard To Get A Good Overview Of Progress

Having a good overview of progress is essential to good project management. With a good overview, you can be forewarned that meeting the deadline is in danger early enough to take action. Delivered scenarios are an excellent indicator of progress because you can track what behaviors are actually supported by the application. The traditional approach of calculating an arbitrary percentage of work completed is not nearly as effective.

### Introduction Of New Features Causing Unwanted Side Effects

The success of a great new feature in the application can easily be overshadowed by a bug that gets introduced at the same time. And if a subsequent bug fix introduces two more defects, then all the excitement will vanish. As the code base grows, the chance of a change producing unwanted side effects increases. This can lead to a seemingly endless increase in the implementation cost of new features. In the worst case, this can lead to rewriting of the project.

Adopting BDD encourages good automated test coverage, where automated tests and scenarios are tightly connected with the requirements. Once a change causes a failing test, it is easy to diagnose whether this problem is related to contradictory requirements or defects in the code. The automated scenarios provide a useful safety net that protects you from unwanted side effects and helps keep the cost of implementing a new feature constant as the product evolves. Instead of being afraid to change the code, the development team is safe to experiment and see how the application reacts to them.

### Not Being Able To React Fast Enough To Market Changes

In order to be able to catch up with competitors in a changing market, you have to establish a development model that keeps the cost of implementing new features low while maintaining the quality of the application. Observing it from this angle, it becomes clear that the problem is closely related to the previous discussion of unwanted side effects, so the same conclusions are also valid here.

Furthermore, we should also highlight the fact that experiments are not only valuable at the code level (that is, experiments such as changing the code to see what happens), but also at the specification level. With the specification language you build for expressing the scenarios, you have developed a framework within which the product owner or the business analyst can investigate how the system behaves with different parameters or different user workflows.

### Bug-Versus-Feature Debates Within The Team

Too often, developers and testers build their own solutions independently: developers write the application code, and testers write the test cases. This redundancy might result in conflicts at the point when the two parallel worlds meet: when the test cases are used to test the application. These are the typical bug-versus-feature debates.

The rework and frustration caused by these debates can be avoided by reducing redundancy and encouraging developers and testers to work on understanding the details of the requirements together. The collaboration demanded by BDD, and the scenarios that are the output of that collaboration (refer to the _Why stop now?_ Section from _Chapter 3, What Is an Example?_), help to improve this situation.

### Changes Regularly Requested At Sprint/Feature Reviews

The iterative development concept of agile is based on the fact that you can only get real feedback for a feature when business stakeholders actually get to see it in action. This is why we implement the application in small increments, and this is why we organize sprint/feature reviews.

While it is better to realize that the application is not doing exactly what it should at a sprint review, rather than realizing this after a two-year delivery cycle, fixing the application is still much more expensive than doing it right from the beginning. If you regularly discover changes during the review, you probably aren't following the detailed requirements well enough.

BDD supports detailed requirement analysis in many ways. By focusing on examples, ambiguities can be recognized and cleared up (see the _What about testing?_ Section from _Chapter 1, What Is BDD?_). Additionally, since scenarios document the specification in ubiquitous language, misunderstandings are less likely (refer to the _A language that is understood by everyone_ section from _Chapter 1, What Is BDD?_).

### But My Product Owner Never Reads The Scenarios

A common situation is a product owner that never reads the scenarios. On closer inspection, this often turns out to be a symptom of a deeper problem.

Scenarios specify how the application should behave. If the product owner is collaborating in the creation of the scenarios but does not seem to be using the _living documentation_, you should check that they have access to the scenarios.

Accessing files in source control is easy for developers, but is this how we want to publish our living documentation? Try to make it more accessible! There are tools available for converting plain-text feature files into a more readable form (refer to the _Living documentation_ section from _Chapter 1, What Is BDD?_). Integrate the publishing process into the continuous integration pipeline and make the result easily accessible (by adding a link to the project dashboard, for example).

You might also need to consider how someone can find information within the living documentation. For instance, you might want to improve how you tag your scenarios so that information related to special topics can be easily found.

Even if you have an easy-to-access, nicely formatted document, it might take some time for the business to learn how to use it effectively. Be patient. Take time to regularly review how the living documentation is being used by the business and what changes might make it more useful.

#### Gaspar's story: When I first used Wikipedia

I still remember how I felt when I first heard about Wikipedia. It was hard to believe that an encyclopedia that is free and can be edited by anyone could be useful. So, I was a bit cautious in the beginning and did not trust the information I read. Over time, I've learned when I can rely on the Wikipedia articles and when I should check other sources as well.

The situation with living documentation is similar to this. Everyone in the team has to learn how to use it and what questions can be answered with it.

Perhaps further information is required, such as an automation trace or a scenario change report. Perhaps a modified structure would help, such as organizing feature files hierarchically. Or possibly a different tagging policy would be useful, identifying the release that a particular behavior was delivered in. Almost anything like this is possible – you just need to talk together.

What We Just Learned
--------------------

BDD depends on collaboration. In this chapter, we've emphasized how important it is to get the business involved in the BDD approach and have looked at why this is sometimes difficult. We presented some tips based on our experience of working with organizations adopting BDD, some of which may work for you.

The information presented in this chapter is broadly applicable, but you should also make use of other sources of experience within the software development community. User groups and conferences are good places to meet like-minded individuals and to have in-depth, face-to-face conversations.


Introduction
------------

We have already explained how the most important element of **Behavior Driven Development** (BDD) is collaboration. Collaboration means that team members with different roles work together to deliver working software. A team will include both the business (including the product owners, project sponsors, business analysts, and so on) and technical personnel (such as developers, testers, UX experts, and operation staff). It's a common mistake to focus just on collaboration between delivery team members.

In this chapter, we would like to share our experiences of getting business representatives fully involved in the BDD approach and talk about what kind of challenges they might face. You'll see that we believe the key to successfully adopting BDD is to demonstrate to the business the value of collaborating with the delivery team. There is no fixed recipe for this – you'll need to develop and refine your strategy depending on your project's context.

"_The proof of the pudding is in the eating_" – in the end, seeing the immense value that results from practicing real collaboration is the only way to demonstrate that BDD can work in your context. Our aim is to give your team enough enthusiasm to give BDD a try.


Learn From Your Peers
---------------------

The key benefits typically attributed to BDD are:

*   Reduced cycle time
*   Reduced rework/rejections
*   A reduced number of production issues
*   Keeping the implementation costs of new features under control

Although we provided reasoning that supported these benefits, nothing is more convincing than learning about existing projects that have applied BDD successfully. One way of doing this is to talk to people who have actually participated in a successful BDD project. The best places to meet these people are conferences and user groups.


The One Where The Business Is Not Involved
------------------------------------------

Often, the BDD approach is introduced by the team or vendor that is responsible for delivering the solution. The business has probably not been involved in the BDD approach from the start. They might not have even heard of BDD. In these cases, the team needs to find a way to sell BDD to them, by convincing them that their participation in this approach will help to deliver better results.

If you have ever tried to sell a new method or process to the business (especially one with a **TLA** – a **Three-Letter Acronym**), you'll know that this can be challenging. The business might:

*   Have a default resistance to new methodologies
*   See this approach as an overhead
*   Be afraid of learning and infrastructure costs
*   Have formal or legal distance from the team (for instance, the business representative may be a part of the customer, not the vendor)
*   See BDD as a testing or development technique

In some situations, teams might try to apply BDD without involving the business. This is sometimes called **developer-only BDD**, or **tester-only BDD**, and should be considered a Bad Thing™. A lot of teams and projects claim to practice BDD without involving the business, and some of them seem to be happy with this. This is because collaborating at the development team level can still introduce clear guidance for how testing and test automation should be performed. Having this approach in place is better than an ad-hoc, chaotic testing strategy, but it does not deliver the massive benefits that are available by involving the business as well.

#### Seb's story: You keep using BDD; I do not think it means what you think it means

I've visited a lot of teams that don't have the business involved in BDD. We have charitably described this as "developer-only", or "tester-only", BDD, but I tend to think of people following this as not following BDD at all. At best, they are using tools that were designed to support collaboration as expensive test automation platforms. The outcome is usually suites of automated tests that are slow to execute, hard to maintain, and of limited value to the organization. They would get more value from dedicated test automation tools.

BDD is about collaboration. Using a BDD tool, or automating tests using _Given_ _When_ _Then_, doesn't make your development approach BDD in the slightest.

Without the business involved, unless the team is very business-focused and disciplined, the scenarios become technical, data-driven, and dry. This means that the business gets very little value from reading the scenarios and, consequently, won't understand the implication of a failing scenario. This removes the possibility that the scenarios will provide a constructive feedback loop between the business and delivery team – so the scenarios become an overhead.

As we said earlier, the way BDD can win for the business depends on the project context. In some cases, developer/tester-only BDD can be a step in this strategy. With the systematic, business-focused application of BDD, you can gather enough knowledge and examples to demonstrate the benefits of BDD to the business, thereby giving you a better chance of convincing the business.

If you happen to be in a situation where you practice BDD but your business is not involved (yet), consider the following advice:

*   Consider your situation as a temporary solution that you can use as a step towards full collaboration.
*   Think about your scenarios as business examples. Try to imagine how the business would explain the "story" behind the scenario. Use realistic data and business-readable phrases. Testers can be a big help in this, as they typically act as a mediator between the requirements and the solution.
*   Try to focus your detailed requirement discussions on examples. The business does not have to know that you're practicing BDD. "Could you please give a concrete example!" is a valid question in any process.
*   Present your results and methods to the business regularly and watch their reactions to figure out which aspects of BDD they find most useful. (Gaspar's story in the _BDD in Scrum_ section in _Chapter 4, Who Does What and When_, about showing scenarios in the sprint review is a good example of this.)

We've worked with many teams that initially resisted adopting a BDD approach, hearing "We cannot apply BDD, because our business does not want to be involved." You could try following a BDD approach without business involvement, as a first step – you'll get all the benefits we've outlined and, in time, your business colleagues will come to appreciate the value of expressing the acceptance criteria as plain-English scenarios.


BDD Is For Solving Problems
---------------------------

Once you are into the daily routine of BDD, you could explain it to your product owner in a way that highlights Example Mapping, formulation, and automation. Or, you could explain the BDD as a process, as we did in _Chapter 4, Who Does What and When_.

This might work for some people; however, presenting BDD in this way doesn't seem to be very appealing when talking to business team members. The problem is similar to one that we come across on a daily basis: focusing on the solution instead of the problem itself. BDD has no value unless it is helping you to solve problems, improve development efficiency, and produce better results. In order to get your business colleagues engaged, you have to find the pain points (or opportunities) that exist in your current process. If there are no problems and everything is just perfect, there is no need to introduce BDD.

Identifying these challenges is an important first achievement, from which you can build up sound justification for trying alternative approaches. It is impossible to enumerate all the different kinds of problems or challenges your project might face, but the following section provides a brief list of typical issues and the solutions that BDD can provide.

### The Product Owner Is Overloaded

This might sound counter-intuitive, but BDD can help reduce the product owner's workload.

The lack of business availability is a common counter-argument to adopting BDD. "If they are already overloaded, increasing their level of collaboration would make them even more so" is a typical response, but it doesn't have to be that way. Regardless of whether you use BDD or not, in the end, the product owner has to provide the input that is needed to implement the application. Our goal with BDD is to improve communication efficiency by focusing on early, direct communication with the business, ensuring fewer misunderstandings and less rework. The following list compares the activities that product owners spend their time on in BDD and classic agile development.

BDD product owner activities:

*   Participating in requirement workshops (such as Example Mapping)
*   Reviewing scenarios
*   Giving feedback regarding the application implemented

Classic product owner activities:

*   Writing specifications
*   Presenting the stories to the team
*   Discussing ad-hoc questions during implementation
*   Collecting deviations from the expected result in the sprint review
*   Managing and prioritizing requirement-related bugs

If you compare the collaboration time needed from the product owner with the efforts required in a classic development process, you can see that although BDD needs time to be spent on collaborating and reviewing, we avoid discussing the same topics over and over again and the work is distributed throughout the team (for example, scenarios written by the team replace the written specification).

### Production Issues Are Common

Production issues are costly: as determined by an IBM study ([ftp://ftp.software.ibm.com/software/rational/info/do-more/RAW14109USEN.pdf](ftp://ftp.software.ibm.com/software/rational/info/do-more/RAW14109USEN.pdf)), the cost of a production issue is 30 times higher than "fixing" the same issue during the preparation phase. They are not only costly to fix, but they can easily result in customer dissatisfaction and mistrust.

In the _What about testing?_ section in _Chapter 1, What Is BDD?_ we described the relationship between BDD and testing: our goal is to prevent production issues being introduced during requirement analysis and achieve detailed specification. The resulting reduction in production issues is the most easily measurable benefit of applying the BDD approach.

If production issues are common in your project, you need to take immediate steps to improve the situation. While the problem will probably need to be addressed from several angles, introducing BDD can certainly contribute to the ultimate solution.

### It Is Hard To Get The Product To A Deliverable State

There is a huge, frequently underestimated gap between implementing a feature and bringing it to a releasable state. There are a lot of "smallish tasks" you need to take care of, such as creating deployment packages, updating user documentation, and verifying performance requirements. Experience shows that these tasks are often deferred until the story (or release) is "almost done." Since the effort required for these activities is usually underestimated, the result is functionality that can be (partially) demonstrated, but still can't be released to users.

To ensure that the application can be reliably released at short notice, the team should follow the **Continuous Delivery** (**CD**) approach. CD requires the team to work on the application in short cycles, where each cycle contains all the steps necessary to make the application deliverable. Since these cycles might be really short (often shorter than a day), a high level of automation is required to perform the necessary verification and packaging steps.

#### Seb's story: Delivery is not deployment

CD could stand for either Continuous Delivery or Continuous Deployment – these are not the same thing. Just because an application is in a deliverable state does not necessarily mean that you will release it to end users. Whether a particular deliverable is released or not is a business decision, not simply a quality control decision.

The process that automatically builds, tests, and packages each product increment as a potential deliverable is called continuous delivery. The process that also automatically releases each deliverable to end users is called continuous deployment.

Continuous deployment is not necessarily applicable to all kinds of applications, but continuous delivery can be applied to all projects.

To move toward CD, stories should be sliced up into very small chunks. In Scrum, the implementation of a feature or a user story is broken down to technical implementation tasks. Sometimes, teams adopt an inadvisable approach called **horizontal slicing**, where tasks are defined along the different layers of the application (as in "implement the data access layer for the story"). If the story is broken down in this way, the application can only reach a deliverable state when all tasks are done and the entire story is finished.

The scenarios we use in BDD provide a functional breakdown of the story. Every scenario represents a part of the expected behavior and makes sense on its own (**vertical slicing**). Even better, each scenario can act as a work unit (see the _BDD in Scrum_ section in _Chapter 4, Who Does What and When_). If you routinely include the "smallish tasks" in the implementation of every scenario, you will keep the application in a releasable state. Now, you're well placed to adopt CD, or even continuous deployment.

### It Is Hard To Get Customers Engaged With The Product

Nothing is more frustrating than delivering a good quality product that is not appreciated or used by end users. While there may be many reasons behind this, it can indicate a development process that does not focus on user value. You might be in this situation because your project organizes work using horizontal slicing and technical stories ([http://www.innolution.com/resources/glossary/technical-stories](http://www.innolution.com/resources/glossary/technical-stories)).

Since BDD encourages the team to focus on realistic examples of application behavior, the product tends to evolve in line with the user's viewpoint. Also, the collaboration techniques used by BDD can help UX experts get involved early in the design phase.

### Deadlines Are Often Missed

Deadlines, at least those ones you can miss, are set based upon an estimate of how long it will take to deliver the set of required features (the scope). However, as the name implies, estimates are just an estimation. They can be wrong... and often are. If the scope to be reached is fixed, there is not much you can do to meet the deadline if the estimate was wrong. You can force the team to work overtime, or you can allocate more staff, but these methods rarely provide an effective long-term solution.

The key to the successful management of deadlines is to allow more flexibility in the scope: "Try to incorporate as much value as we can for the given deadline."

BDD will not tell you how to cut the scope, but it gives you a framework for enabling functional cuts, even within a user story. Scenarios provide a functional breakdown of the story and give you the opportunity to reduce the scope by identifying and deferring lower-priority behaviors when you are under time pressure.

### Hard To Get A Good Overview Of Progress

Having a good overview of progress is essential to good project management. With a good overview, you can be forewarned that meeting the deadline is in danger early enough to take action. Delivered scenarios are an excellent indicator of progress because you can track what behaviors are actually supported by the application. The traditional approach of calculating an arbitrary percentage of work completed is not nearly as effective.

### Introduction Of New Features Causing Unwanted Side Effects

The success of a great new feature in the application can easily be overshadowed by a bug that gets introduced at the same time. And if a subsequent bug fix introduces two more defects, then all the excitement will vanish. As the code base grows, the chance of a change producing unwanted side effects increases. This can lead to a seemingly endless increase in the implementation cost of new features. In the worst case, this can lead to rewriting of the project.

Adopting BDD encourages good automated test coverage, where automated tests and scenarios are tightly connected with the requirements. Once a change causes a failing test, it is easy to diagnose whether this problem is related to contradictory requirements or defects in the code. The automated scenarios provide a useful safety net that protects you from unwanted side effects and helps keep the cost of implementing a new feature constant as the product evolves. Instead of being afraid to change the code, the development team is safe to experiment and see how the application reacts to them.

### Not Being Able To React Fast Enough To Market Changes

In order to be able to catch up with competitors in a changing market, you have to establish a development model that keeps the cost of implementing new features low while maintaining the quality of the application. Observing it from this angle, it becomes clear that the problem is closely related to the previous discussion of unwanted side effects, so the same conclusions are also valid here.

Furthermore, we should also highlight the fact that experiments are not only valuable at the code level (that is, experiments such as changing the code to see what happens), but also at the specification level. With the specification language you build for expressing the scenarios, you have developed a framework within which the product owner or the business analyst can investigate how the system behaves with different parameters or different user workflows.

### Bug-Versus-Feature Debates Within The Team

Too often, developers and testers build their own solutions independently: developers write the application code, and testers write the test cases. This redundancy might result in conflicts at the point when the two parallel worlds meet: when the test cases are used to test the application. These are the typical bug-versus-feature debates.

The rework and frustration caused by these debates can be avoided by reducing redundancy and encouraging developers and testers to work on understanding the details of the requirements together. The collaboration demanded by BDD, and the scenarios that are the output of that collaboration (refer to the _Why stop now?_ Section from _Chapter 3, What Is an Example?_), help to improve this situation.

### Changes Regularly Requested At Sprint/Feature Reviews

The iterative development concept of agile is based on the fact that you can only get real feedback for a feature when business stakeholders actually get to see it in action. This is why we implement the application in small increments, and this is why we organize sprint/feature reviews.

While it is better to realize that the application is not doing exactly what it should at a sprint review, rather than realizing this after a two-year delivery cycle, fixing the application is still much more expensive than doing it right from the beginning. If you regularly discover changes during the review, you probably aren't following the detailed requirements well enough.

BDD supports detailed requirement analysis in many ways. By focusing on examples, ambiguities can be recognized and cleared up (see the _What about testing?_ Section from _Chapter 1, What Is BDD?_). Additionally, since scenarios document the specification in ubiquitous language, misunderstandings are less likely (refer to the _A language that is understood by everyone_ section from _Chapter 1, What Is BDD?_).

### But My Product Owner Never Reads The Scenarios

A common situation is a product owner that never reads the scenarios. On closer inspection, this often turns out to be a symptom of a deeper problem.

Scenarios specify how the application should behave. If the product owner is collaborating in the creation of the scenarios but does not seem to be using the _living documentation_, you should check that they have access to the scenarios.

Accessing files in source control is easy for developers, but is this how we want to publish our living documentation? Try to make it more accessible! There are tools available for converting plain-text feature files into a more readable form (refer to the _Living documentation_ section from _Chapter 1, What Is BDD?_). Integrate the publishing process into the continuous integration pipeline and make the result easily accessible (by adding a link to the project dashboard, for example).

You might also need to consider how someone can find information within the living documentation. For instance, you might want to improve how you tag your scenarios so that information related to special topics can be easily found.

Even if you have an easy-to-access, nicely formatted document, it might take some time for the business to learn how to use it effectively. Be patient. Take time to regularly review how the living documentation is being used by the business and what changes might make it more useful.

#### Gaspar's story: When I first used Wikipedia

I still remember how I felt when I first heard about Wikipedia. It was hard to believe that an encyclopedia that is free and can be edited by anyone could be useful. So, I was a bit cautious in the beginning and did not trust the information I read. Over time, I've learned when I can rely on the Wikipedia articles and when I should check other sources as well.

The situation with living documentation is similar to this. Everyone in the team has to learn how to use it and what questions can be answered with it.

Perhaps further information is required, such as an automation trace or a scenario change report. Perhaps a modified structure would help, such as organizing feature files hierarchically. Or possibly a different tagging policy would be useful, identifying the release that a particular behavior was delivered in. Almost anything like this is possible – you just need to talk together.


What We Just Learned
--------------------

BDD depends on collaboration. In this chapter, we've emphasized how important it is to get the business involved in the BDD approach and have looked at why this is sometimes difficult. We presented some tips based on our experience of working with organizations adopting BDD, some of which may work for you.

The information presented in this chapter is broadly applicable, but you should also make use of other sources of experience within the software development community. User groups and conferences are good places to meet like-minded individuals and to have in-depth, face-to-face conversations.


Appendix
========


What's next
-----------

You've made it to the end. Congratulations!

Thanks for reading this book – we'd love to hear what you thought about the book. If you have any suggestions, comments or a good story about your experiences, please write to us at [feedback@bddbooks.com](http://feedback@bddbooks.com).


Where are we now?
-----------------

In this book we've covered the first part of the BDD approach: Discovery. We've stressed the importance of collaboration, described workshops and techniques that can help your teams reduce misunderstandings, and illustrated this with our own experience in the software industry.

Our goal in writing this book was that it would be useful to everyone involved in the specification and delivery of software. So, please encourage the rest of your team to read it – it won't take long.


