const regex = {
  start: `<li><a href="work\/[0-9]*">`,
  middle: `</a> by <a href="/author/[a-z]*">`,
  tail: `(<\ /a> \([0-9]*,[0-9]*\)<\ /li>)`,
}

// Book List from https://www.librarything.com/z_books.php
// Retrieved 202-03-24
module.exports = [
{
  title: `Harry Potter and the Sorcerer's Stone (Book 1)`,
  author: `J. K. Rowling`,
},
{
  title: `Harry Potter and the Chamber of Secrets`,
  author: `J. K. Rowling`
},
{
  title: `Harry Potter and the Prisoner of Azkaban`,
  author: `J. K. Rowling`
},
{
  title: `Harry Potter and the Half-Blood Prince`,
  author: `J. K. Rowling`
},
{
  title: `Harry Potter and the Goblet of Fire`,
  author: `J. K. Rowling`
},
{
  title: `Harry Potter and the Order of the Phoenix`,
  author: `J. K. Rowling`
},
{
  title: `Harry Potter and the Deathly Hallows`,
  author: `J. K. Rowling`
},
{
  title: `The Hobbit`,
  author: `J. R. R. Tolkien`
},
{
  title: `1984`,
  author: `George Orwell`
},
{
  title: `Pride and Prejudice`,
  author: `Jane Austen`
},
{
  title: `To Kill a Mockingbird`,
  author: `Harper Lee`
},
{
  title: `The Da Vinci Code`,
  author: `Dan Brown`
},
{
  title: `The Catcher in the Rye`,
  author: `J. D. Salinger`
},
{
  title: `The Great Gatsby`,
  author: `F. Scott Fitzgerald`
},
{
  title: `Twilight`,
  author: `Stephenie Meyer`
},
{
  title: `The Hunger Games`,
  author: `Suzanne Collins`
},
{
  title: `Jane Eyre`,
  author: `Charlotte Brontë`
},
{
  title: `Animal Farm`,
  author: `George Orwell`
},
{
  title: `The Kite Runner`,
  author: `Khaled Hosseini`
},
{
  title: `Brave New World`,
  author: `Aldous Huxley`
},
{
  title: `The Lord of the Rings`,
  author: `J. R. R. Tolkien`
},
{
  title: `The Fellowship of the Ring`,
  author: `J. R. R. Tolkien`
},
{
  title: `Fahrenheit 451`,
  author: `Ray Bradbury`
},
{
  title: `Wuthering Heights`,
  author: `Emily Brontë`
},
{
  title: `The Odyssey`,
  author: `Homer`
},
{
  title: `Angels &amp; Demons`,
  author: `Dan Brown`
},
{
  title: `New Moon`,
  author: `Stephenie Meyer`
},
{
  title: `Lord of the Flies`,
  author: `William Golding`
},
{
  title: `The Curious Incident of the Dog in the Night-Time`,
  author: `Mark Haddon`
},
{
  title: `Life of Pi`,
  author: `Yann Martel`
},
{
  title: `The Two Towers`,
  author: `J. R. R. Tolkien`
},
{
  title: `Catching Fire`,
  author: `Suzanne Collins`
},
{
  title: `One Hundred Years of Solitude`,
  author: `Gabriel Garcia Marquez`
},
{
  title: `Slaughterhouse-Five`,
  author: `Kurt Vonnegut`
},
{
  title: `Eclipse`,
  author: `Stephenie Meyer`
},
{
  title: `The Return of The King`,
  author: `J. R. R. Tolkien`
},
{
  title: `The Girl with the Dragon Tattoo`,
  author: `Stieg Larsson`
},
{
  title: `The Time Traveler's Wife`,
  author: `Audrey Niffenegger`
},
{
  title: `Crime and Punishment`,
  author: `Fyodor Dostoevsky`
},
{
  title: `The Book Thief`,
  author: `Markus Zusak`
},
{
  title: `Ender's Game`,
  author: `Orson Scott Card`
},
{
  title: `The Adventures of Huckleberry Finn`,
  author: `Mark Twain`
},
{
  title: `The Lion, the Witch and the Wardrobe (The Chronicles of Narnia)`,
  author: `C. S. Lewis`
},
{
  title: `Catch-22`,
  author: `Joseph Heller`
},
{
  title: `Breaking Dawn`,
  author: `Stephenie Meyer`
},
{
  title: `Mockingjay`,
  author: `Suzanne Collins`
},
{
  title: `The Little Prince`,
  author: `Antoine de Saint-Exupéry`
},
{
  title: `A Game of Thrones`,
  author: `George R. R. Martin`
},
{
  title: `Memoirs of a Geisha`,
  author: `Arthur Golden`
},
{
  title: `The Handmaid's Tale`,
  author: `Margaret Atwood`
},
{
  title: `The Lovely Bones`,
  author: `Alice Sebold`
},
{
  title: `Frankenstein`,
  author: `Mary Shelley`
},
{
  title: `The Hitchhiker's Guide to the Galaxy`,
  author: `Douglas Adams`
},
{
  title: `Of Mice and Men`,
  author: `John Steinbeck`
},
{
  title: `The Giver`,
  author: `Lois Lowry`
},
{
  title: `Anna Karenina`,
  author: `Leo Tolstoy`
},
{
  title: `The Alchemist`,
  author: `Paulo Coelho`
},
{
  title: `The Iliad`,
  author: `Homer`
},
{
  title: `Great Expectations`,
  author: `Charles Dickens`
},
{
  title: `A Wrinkle in Time`,
  author: `Madeleine L'Engle`
},
{
  title: `Sense and Sensibility`,
  author: `Jane Austen`
},
{
  title: `The Picture of Dorian Gray`,
  author: `Oscar Wilde`
},
{
  title: `Emma`,
  author: `Jane Austen`
},
{
  title: `Dune`,
  author: `Frank Herbert`
},
{
  title: `Northern Lights`,
  author: `Philip Pullman`
},
{
  title: `American Gods`,
  author: `Neil Gaiman`
},
{
  title: `The Stranger`,
  author: `Albert Camus`
},
{
  title: `A Tale of Two Cities`,
  author: `Charles Dickens`
},
{
  title: `The Road`,
  author: `Cormac McCarthy`
},
{
  title: `The Scarlet Letter`,
  author: `Nathaniel Hawthorne`
},
{
  title: `The Chronicles of Narnia`,
  author: `C. S. Lewis`
},
{
  title: `The Grapes of Wrath`,
  author: `John Steinbeck`
},
{
  title: `Moby Dick`,
  author: `Herman Melville`
},
{
  title: `Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch`,
  author: `Terry Pratchett`
},
{
  title: `The Silmarillion`,
  author: `J. R. R. Tolkien`
},
{
  title: `Lolita`,
  author: `Vladimir Nabokov`
},
{
  title: `Charlotte's Web`,
  author: `E. B. White`
},
{
  title: `Dracula`,
  author: `Bram Stoker`
},
{
  title: `The Complete Works of William Shakespeare`,
  author: `William Shakespeare`
},
{
  title: `Hamlet`,
  author: `William Shakespeare`
},
{
  title: `The Secret Garden`,
  author: `Frances Hodgson Burnett`
},
{
  title: `The Girl Who Played with Fire`,
  author: `Stieg Larsson`
},
{
  title: `A Thousand Splendid Suns`,
  author: `Khaled Hosseini`
},
{
  title: `Eragon`,
  author: `Christopher Paolini`
},
{
  title: `Water for Elephants: A Novel`,
  author: `Sara Gruen`
},
{
  title: `The Help`,
  author: `Kathryn Stockett`
},
{
  title: `Wicked: The Life and Times of the Wicked Witch of the West`,
  author: `Gregory Maguire`
},
{
  title: `Treasure Island`,
  author: `Robert Louis Stevenson`
},
{
  title: `Middlesex: A Novel`,
  author: `Jeffrey Eugenides`
},
{
  title: `The Old Man and The Sea`,
  author: `Ernest Hemingway`
},
{
  title: `The Secret Life of Bees`,
  author: `Sue Monk Kidd`
},
{
  title: `On the Road`,
  author: `Jack Kerouac`
},
{
  title: `The Adventures of Tom Sawyer`,
  author: `Mark Twain`
},
{
  title: `A Clash of Kings`,
  author: `George R. R. Martin`
},
{
  title: `The Shadow of the Wind`,
  author: `Carlos Ruiz Zafón`
},
{
  title: `The Brothers Karamazov`,
  author: `Fyodor Dostoevsky`
},
{
  title: `Jonathan Strange &amp; Mr. Norrell`,
  author: `Susanna Clarke`
},
{
  title: `Atonement`,
  author: `Ian McEwan`
},
{
  title: `Love in the Time of Cholera`,
  author: `Gabriel Garcia Marquez`
},
{
  title: `The Poisonwood Bible`,
  author: `Barbara Kingsolver`
},
{
  title: `Don Quixote`,
  author: `Miguel de Cervantes Saavedra`
},
{
  title: `The Bell Jar`,
  author: `Sylvia Plath`
},
{
  title: `Siddhartha`,
  author: `Hermann Hesse`
},
{
  title: `Persuasion`,
  author: `Jane Austen`
},
{
  title: `The Pillars of the Earth`,
  author: `Ken Follett`
},
{
  title: `Freakonomics: A Rogue Economist Explores the Hidden Side of Everything`,
  author: `Steven D. Levitt`
},
{
  title: `War and Peace`,
  author: `Leo Tolstoy`
},
{
  title: `The Diary of a Young Girl`,
  author: `Anne Frank`
},
{
  title: `Romeo and Juliet`,
  author: `William Shakespeare`
},
{
  title: `The Magician's Nephew`,
  author: `C. S. Lewis`
},
{
  title: `Neverwhere`,
  author: `Neil Gaiman`
},
{
  title: `Night`,
  author: `Elie Wiesel`
},
{
  title: `A Clockwork Orange`,
  author: `Anthony Burgess`
},
{
  title: `Madame Bovary`,
  author: `Gustave Flaubert`
},
{
  title: `The Subtle Knife`,
  author: `Philip Pullman`
},
{
  title: `The Lightning Thief`,
  author: `Rick Riordan`
},
{
  title: `Anne of Green Gables`,
  author: `L. M. Montgomery`
},
{
  title: `The Girl Who Kicked the Hornet’s Nest`,
  author: `Stieg Larsson`
},
{
  title: `Guns, Germs, and Steel: The Fates of Human Societies`,
  author: `Jared Diamond`
},
{
  title: `One Flew over the Cuckoo's Nest`,
  author: `Ken Kesey`
},
{
  title: `Watership Down`,
  author: `Richard Adams`
},
{
  title: `Mere Christianity`,
  author: `C. S. Lewis`
},
{
  title: `Macbeth`,
  author: `William Shakespeare`
},
{
  title: `Les Misérables`,
  author: `Victor Hugo`
},
{
  title: `The Princess Bride`,
  author: `William Goldman`
},
{
  title: `The Amber Spyglass`,
  author: `Philip Pullman`
},
{
  title: `Alice's Adventures in Wonderland`,
  author: `Lewis Carroll`
},
{
  title: `Alice's Adventures in Wonderland and Through the Looking Glass`,
  author: `Lewis Carroll`
},
{
  title: `A Storm of Swords`,
  author: `George R. R. Martin`
},
{
  title: `Prince Caspian`,
  author: `C. S. Lewis`
},
{
  title: `Angela's Ashes`,
  author: `Frank McCourt`
},
{
  title: `Ulysses`,
  author: `James Joyce`
},
{
  title: `Gone with the Wind`,
  author: `Margaret Mitchell`
},
{
  title: `A Feast for Crows`,
  author: `George R. R. Martin`
},
{
  title: `Where the Wild Things Are`,
  author: `Maurice Sendak`
},
{
  title: `Eat, Pray, Love`,
  author: `Elizabeth Gilbert`
},
{
  title: `The Count of Monte Cristo`,
  author: `Alexandre Dumas père`
},
{
  title: `Interview with the Vampire`,
  author: `Anne Rice`
},
{
  title: `A Short History of Nearly Everything`,
  author: `Bill Bryson`
},
{
  title: `Atlas Shrugged`,
  author: `Ayn Rand`
},
{
  title: `The Sun Also Rises`,
  author: `Ernest Hemingway`
},
{
  title: `The Unbearable Lightness of Being`,
  author: `Milan Kundera`
},
{
  title: `In Cold Blood`,
  author: `Truman Capote`
},
{
  title: `The Historian`,
  author: `Elizabeth Kostova`
},
{
  title: `Me Talk Pretty One Day`,
  author: `David Sedaris`
},
{
  title: `Neuromancer`,
  author: `William Gibson`
},
{
  title: `The Voyage of the Dawn Treader`,
  author: `C. S. Lewis`
},
{
  title: `Heart of Darkness`,
  author: `Joseph Conrad`
},
{
  title: `Holes`,
  author: `Louis Sachar`
},
{
  title: `Cat's Cradle`,
  author: `Kurt Vonnegut`
},
{
  title: `Beowulf`,
  author: `Beowulf Poet`
},
{
  title: `The Horse and His Boy`,
  author: `C. S. Lewis`
},
{
  title: `The Tipping Point: How Little Things Can Make a Big Difference`,
  author: `Malcolm Gladwell`
},
{
  title: `Inferno`,
  author: `Dante Alighieri`
},
{
  title: `Outlander`,
  author: `Diana Gabaldon`
},
{
  title: `Robinson Crusoe`,
  author: `Daniel Defoe`
},
{
  title: `East of Eden`,
  author: `John Steinbeck`
},
{
  title: `My Sister's Keeper`,
  author: `Jodi Picoult`
},
{
  title: `Charlie and the Chocolate Factory`,
  author: `Roald Dahl`
},
{
  title: `Never Let Me Go`,
  author: `Kazuo Ishiguro`
},
{
  title: `Oliver Twist`,
  author: `Charles Dickens`
},
{
  title: `Gulliver's Travels`,
  author: `Jonathan Swift`
},
{
  title: `Stardust`,
  author: `Neil Gaiman`
},
{
  title: `The Fault in Our Stars`,
  author: `John Green`
},
{
  title: `A Farewell to Arms`,
  author: `Ernest Hemingway`
},
{
  title: `Mansfield Park`,
  author: `Jane Austen`
},
{
  title: `The Gunslinger`,
  author: `Stephen King`
},
{
  title: `A Confederacy of Dunces`,
  author: `John Kennedy Toole`
},
{
  title: `A Christmas Carol`,
  author: `Charles Dickens`
},
{
  title: `Blink: The Power of Thinking Without Thinking`,
  author: `Malcolm Gladwell`
},
{
  title: `The Prince`,
  author: `Niccolò Machiavelli`
},
{
  title: `Beloved`,
  author: `Toni Morrison`
},
{
  title: `A Portrait of the Artist as a Young Man`,
  author: `James Joyce`
},
{
  title: `The Aeneid`,
  author: `Virgil`
},
{
  title: `The Shining`,
  author: `Stephen King`
},
{
  title: `Anansi Boys`,
  author: `Neil Gaiman`
},
{
  title: `The Colour of Magic`,
  author: `Terry Pratchett`
},
{
  title: `Deception Point`,
  author: `Dan Brown`
},
{
  title: `The Devil in the White City: Murder, Magic, and Madness at the Fair that Changed America`,
  author: `Erik Larson`
},
{
  title: `The Silver Chair`,
  author: `C. S. Lewis`
},
{
  title: `Digital Fortress`,
  author: `Dan Brown`
},
{
  title: `The Graveyard Book`,
  author: `Neil Gaiman`
},
{
  title: `Eldest`,
  author: `Christopher Paolini`
},
{
  title: `The Canterbury Tales`,
  author: `Geoffrey Chaucer`
},
{
  title: `Divergent`,
  author: `Veronica Roth`
},
{
  title: `The Lost Symbol`,
  author: `Dan Brown`
},
{
  title: `Northanger Abbey`,
  author: `Jane Austen`
},
{
  title: `The Republic`,
  author: `Plato`
},
{
  title: `The Wind in the Willows`,
  author: `Kenneth Grahame`
},
{
  title: `The Last Battle`,
  author: `C. S. Lewis`
},
{
  title: `The Elements of Style`,
  author: `William Jr. Strunk`
},
{
  title: `The Glass Castle: A Memoir`,
  author: `Jeannette Walls`
},
{
  title: `The Fountainhead`,
  author: `Ayn Rand`
},
{
  title: `Snow Crash`,
  author: `Neal Stephenson`
},
{
  title: `The Tales of Beedle the Bard`,
  author: `J. K. Rowling`
},
{
  title: `A Brief History of Time: From the Big Bang to Black Holes`,
  author: `Stephen Hawking`
},
{
  title: `The Art of War`,
  author: `Sunzi`
},
{
  title: `Confessions`,
  author: `Saint Augustine`
},
{
  title: `Tuesdays with Morrie: An Old Man, a Young Man, and Life's Greatest Lesson`,
  author: `Mitch Albom`
},
{
  title: `The Amazing Adventures of Kavalier &amp; Clay`,
  author: `Michael Chabon`
},
{
  title: `Candide`,
  author: `Voltaire`
},
{
  title: `The God of Small Things`,
  author: `Arundhati Roy`
},
{
  title: `The Three Musketeers`,
  author: `Alexandre Dumas`
},
{
  title: `David Copperfield`,
  author: `Charles Dickens`
},
{
  title: `Fight Club`,
  author: `Chuck Palahniuk`
},
{
  title: `It`,
  author: `Stephen King`
},
{
  title: `The Trial`,
  author: `Franz Kafka`
},
{
  title: `Mrs. Dalloway`,
  author: `Virginia Woolf`
},
{
  title: `The Stand: The Complete and Uncut Edition`,
  author: `Stephen King`
},
{
  title: `The Bad Beginning`,
  author: `Lemony Snicket`
},
{
  title: `The Name of the Rose`,
  author: `Umberto Eco`
},
{
  title: `Matilda`,
  author: `Roald Dahl`
},
{
  title: `Coraline`,
  author: `Neil Gaiman`
},
{
  title: `Jurassic Park`,
  author: `Michael Crichton`
},
{
  title: `The Guernsey Literary and Potato Peel Pie Society`,
  author: `Mary Ann Shaffer`
},
{
  title: `The Wonderful Wizard of Oz`,
  author: `L. Frank Baum`
},
{
  title: `The Perks of Being a Wallflower`,
  author: `Stephen Chbosky`
},
{
  title: `The Ultimate Hitchhiker's Guide to the Galaxy`,
  author: `Douglas Adams`
},
{
  title: `A Prayer for Owen Meany`,
  author: `John Irving`
},
{
  title: `Watchmen`,
  author: `Alan Moore`
},
{
  title: `Foundation`,
  author: `Isaac Asimov`
},
{
  title: `Gone Girl`,
  author: `Gillian Flynn`
},
{
  title: `Rebecca`,
  author: `Daphne Du Maurier`
},
{
  title: `Dubliners`,
  author: `James Joyce`
},
{
  title: `Things Fall Apart`,
  author: `Chinua Achebe`
},
{
  title: `Artemis Fowl`,
  author: `Eoin Colfer`
},
{
  title: `The Master and Margarita`,
  author: `Mikhail Bulgakov`
},
{
  title: `Zen and the Art of Motorcycle Maintenance: An Inquiry into Values`,
  author: `Robert M. Pirsig`
},
{
  title: `Bridge to Terabithia`,
  author: `Katherine Paterson`
},
{
  title: `The Five People You Meet in Heaven`,
  author: `Mitch Albom`
},
{
  title: `Tess of the d'Urbervilles`,
  author: `Thomas Hardy`
},
{
  title: `The Divine Comedy`,
  author: `Dante Alighieri`
},
{
  title: `The Color Purple`,
  author: `Alice Walker`
},
{
  title: `Sophie's World: A Novel About the History of Philosophy`,
  author: `Jostein Gaarder`
},
{
  title: `The Very Hungry Caterpillar`,
  author: `Eric Carle`
},
{
  title: `A Midsummer Night’s Dream`,
  author: `William Shakespeare`
},
{
  title: `The Memory Keeper's Daughter`,
  author: `Kim Edwards`
},
{
  title: `Where the Sidewalk Ends: Poems and Drawings`,
  author: `Shel Silverstein`
},
{
  title: `The Restaurant at the End of the Universe`,
  author: `Douglas Adams`
},
{
  title: `Girl with a Pearl Earring`,
  author: `Tracy Chevalier`
},
{
  title: `The Outsiders`,
  author: `S. E. Hinton`
},
{
  title: `Bridget Jones's Diary`,
  author: `Helen Fielding`
},
{
  title: `Green Eggs and Ham`,
  author: `Dr. Seuss`
},
{
  title: `The Thirteenth Tale`,
  author: `Diane Setterfield`
},
{
  title: `Do Androids Dream of Electric Sheep?`,
  author: `Philip K. Dick`
},
{
  title: `For Whom the Bell Tolls`,
  author: `Ernest Hemingway`
},
{
  title: `Perfume: The Story of a Murderer`,
  author: `Patrick Süskind`
},
{
  title: `The Wind-Up Bird Chronicle`,
  author: `Haruki Murakami`
},
{
  title: `Foucault's Pendulum`,
  author: `Umberto Eco`
},
{
  title: `The Joy Luck Club`,
  author: `Amy Tan`
},
{
  title: `Cryptonomicon`,
  author: `Neal Stephenson`
},
{
  title: `The Red Tent: A Novel`,
  author: `Anita Diamant`
},
{
  title: `The Sea of Monsters`,
  author: `Rick Riordan`
},
{
  title: `And Then There Were None`,
  author: `Agatha Christie`
},
{
  title: `The Corrections`,
  author: `Jonathan Franzen`
},
{
  title: `The Host`,
  author: `Stephenie Meyer`
},
{
  title: `City of Bones`,
  author: `Cassandra Clare`
},
{
  title: `The Secret History`,
  author: `Donna Tartt`
},
{
  title: `Kafka on the Shore`,
  author: `Haruki Murakami`
},
{
  title: `Their Eyes Were Watching God`,
  author: `Zora Neale Hurston`
},
{
  title: `Tao Te Ching`,
  author: `Lao Tzu`
},
{
  title: `To the Lighthouse`,
  author: `Virginia Woolf`
},
{
  title: `The God Delusion`,
  author: `Richard Dawkins`
},
{
  title: `On Writing`,
  author: `Stephen King`
},
{
  title: `All Quiet on the Western Front`,
  author: `Erich Maria Remarque`
},
{
  title: `Inkheart`,
  author: `Cornelia Funke`
},
{
  title: `Cloud Atlas`,
  author: `David Mitchell`
},
{
  title: `James and the Giant Peach`,
  author: `Roald Dahl`
},
{
  title: `The Plague`,
  author: `Albert Camus`
},
{
  title: `Into the Wild`,
  author: `Jon Krakauer`
},
{
  title: `A Heartbreaking Work of Staggering Genius`,
  author: `Dave Eggers`
},
{
  title: `Extremely Loud and Incredibly Close`,
  author: `Jonathan Safran Foer`
},
{
  title: `The Eye of the World`,
  author: `Robert Jordan`
},
{
  title: `The Blind Assassin`,
  author: `Margaret Atwood`
},
{
  title: `Oryx and Crake`,
  author: `Margaret Atwood`
},
{
  title: `The Mists of Avalon`,
  author: `Marion Zimmer Bradley`
},
{
  title: `The Name of the Wind`,
  author: `Patrick Rothfuss`
},
{
  title: `The Pilgrim's Progress`,
  author: `John Bunyan`
},
{
  title: `The Time Machine`,
  author: `H. G. Wells`
},
{
  title: `A Walk in the Woods: Rediscovering America on the Appalachian Trail`,
  author: `Bill Bryson`
},
{
  title: `The Call of the Wild`,
  author: `Jack London`
},
{
  title: `The Cat in the Hat`,
  author: `Dr. Seuss`
},
{
  title: `The Giving Tree`,
  author: `Shel Silverstein`
},
{
  title: `Middlemarch`,
  author: `George Eliot`
},
{
  title: `The Sound and the Fury`,
  author: `William Faulkner`
},
{
  title: `The Eyre Affair`,
  author: `Jasper Fforde`
},
{
  title: `Looking for Alaska`,
  author: `John Green`
},
{
  title: `Breakfast of Champions`,
  author: `Kurt Vonnegut`
},
{
  title: `Little Women`,
  author: `Louisa May Alcott`
},
{
  title: `The BFG`,
  author: `Roald Dahl`
},
{
  title: `The Other Boleyn Girl`,
  author: `Philippa Gregory`
},
{
  title: `Eats, Shoots &amp; Leaves: The Zero Tolerance Approach to Punctuation`,
  author: `Lynne Truss`
},
{
  title: `The War of the Worlds`,
  author: `H. G. Wells`
},
{
  title: `The World According to Garp`,
  author: `John Irving`
},
{
  title: `Number the Stars`,
  author: `Lois Lowry`
},
{
  title: `Dead Until Dark`,
  author: `Charlaine Harris`
},
{
  title: `Island of the Blue Dolphins`,
  author: `Scott O'Dell`
},
{
  title: `The Screwtape Letters (with Screwtape Proposes a Toast)`,
  author: `C. S. Lewis`
},
{
  title: `Running with Scissors`,
  author: `Augusten Burroughs`
},
{
  title: `High Fidelity`,
  author: `Nick Hornby`
},
{
  title: `The 7 Habits of Highly Effective People`,
  author: `Stephen R. Covey`
},
{
  title: `Speaker for the Dead`,
  author: `Orson Scott Card`
},
{
  title: `The Phantom Tollbooth`,
  author: `Norton Juster`
},
{
  title: `The Titan's Curse`,
  author: `Rick Riordan`
},
{
  title: `The Martian Chronicles`,
  author: `Ray Bradbury`
},
{
  title: `The Strange Case of Dr. Jekyll and Mr. Hyde`,
  author: `Robert Louis Stevenson`
},
{
  title: `Goodnight Moon`,
  author: `Margaret Wise Brown`
},
{
  title: `Life, the Universe and Everything`,
  author: `Douglas Adams`
},
{
  title: `A Tree Grows in Brooklyn`,
  author: `Betty Smith`
},
{
  title: `Othello`,
  author: `William Shakespeare`
},
{
  title: `Franny and Zooey`,
  author: `J. D. Salinger`
},
{
  title: `Twenty Thousand Leagues Under the Sea`,
  author: `Jules Verne`
},
{
  title: `Everything Is Illuminated`,
  author: `Jonathan Safran Foer`
},
{
  title: `Invisible Man`,
  author: `Ralph Ellison`
},
{
  title: `Peter Pan`,
  author: `J. M. Barrie`
},
{
  title: `The Idiot`,
  author: `Fyodor Dostoevsky`
},
{
  title: `The Drawing of the Three`,
  author: `Stephen King`
},
{
  title: `Mort`,
  author: `Terry Pratchett`
},
{
  title: `Norwegian Wood`,
  author: `Haruki Murakami`
},
{
  title: `Miss Peregrine's Home For Peculiar Children`,
  author: `Ransom Riggs`
},
{
  title: `The Remains of the Day`,
  author: `Kazuo Ishiguro`
},
{
  title: `Uncle Tom's Cabin`,
  author: `Harriet Beecher Stowe`
},
{
  title: `The Notebook`,
  author: `Nicholas Sparks`
},
{
  title: `The Battle of the Labyrinth`,
  author: `Rick Riordan`
},
{
  title: `Salem's Lot`,
  author: `Stephen King`
},
{
  title: `Outliers: The Story of Success`,
  author: `Malcolm Gladwell`
},
{
  title: `Hatchet`,
  author: `Gary Paulsen`
},
{
  title: `Fear and Loathing in Las Vegas`,
  author: `Hunter S. Thompson`
},
{
  title: `The Once and Future King`,
  author: `T. H. White`
},
{
  title: `A Wizard of Earthsea`,
  author: `Ursula K. Le Guin`
},
{
  title: `Black Beauty`,
  author: `Anna Sewell`
},
{
  title: `Dress Your Family in Corduroy and Denim`,
  author: `David Sedaris`
},
{
  title: `The No. 1 Ladiesʼ Detective Agency`,
  author: `Alexander McCall Smith`
},
{
  title: `World War Z`,
  author: `Max Brooks`
},
{
  title: `The Light Fantastic`,
  author: `Terry Pratchett`
},
{
  title: `A Dance With Dragons`,
  author: `George R. R. Martin`
},
{
  title: `The Night Circus`,
  author: `Erin Morgenstern`
},
{
  title: `Speak`,
  author: `Laurie Halse Anderson`
},
{
  title: `The Purpose Driven Life`,
  author: `Rick Warren`
},
{
  title: `His Dark Materials`,
  author: `Philip Pullman`
},
{
  title: `Around the World in Eighty Days`,
  author: `Jules Verne`
},
{
  title: `The Crucible`,
  author: `Arthur Miller`
},
{
  title: `Vanity Fair`,
  author: `William Makepeace Thackeray`
},
{
  title: `The Shack`,
  author: `William P. Young`
},
{
  title: `So Long, and Thanks for All the Fish`,
  author: `Douglas Adams`
},
{
  title: `Dune Messiah`,
  author: `Frank Herbert`
},
{
  title: `As I Lay Dying`,
  author: `William Faulkner`
},
{
  title: `The Omnivore's Dilemma: A Natural History of Four Meals`,
  author: `Michael Pollan`
},
{
  title: `The Shipping News`,
  author: `E. Annie Proulx`
},
{
  title: `Flowers for Algernon`,
  author: `Daniel Keyes`
},
{
  title: `Midnight in the Garden of Good and Evil`,
  author: `John Berendt`
},
{
  title: `A People's History of the United States`,
  author: `Howard Zinn`
},
{
  title: `King Lear`,
  author: `William Shakespeare`
},
{
  title: `Dirk Gently's Holistic Detective Agency`,
  author: `Douglas Adams`
},
{
  title: `White Teeth`,
  author: `Zadie Smith`
},
{
  title: `Equal Rites`,
  author: `Terry Pratchett`
},
{
  title: `Cold Mountain`,
  author: `Charles Frazier`
},
{
  title: `Brisingr`,
  author: `Christopher Paolini`
},
{
  title: `The Vampire Lestat`,
  author: `Anne Rice`
},
{
  title: `The Left Hand of Darkness`,
  author: `Ursula K. Le Guin`
},
{
  title: `I, Robot`,
  author: `Isaac Asimov`
},
{
  title: `Storm Front`,
  author: `Jim Butcher`
},
{
  title: `From the Mixed-Up Files of Mrs. Basil E. Frankweiler`,
  author: `E. L. Konigsburg`
},
{
  title: `The Reader`,
  author: `Bernhard Schlink`
},
{
  title: `Midnight's Children`,
  author: `Salman Rushdie`
},
{
  title: `The Last Olympian`,
  author: `Rick Riordan`
},
{
  title: `Room`,
  author: `Emma Donoghue`
},
{
  title: `The House of the Spirits`,
  author: `Isabel Allende`
},
{
  title: `House of Leaves`,
  author: `Mark Z. Danielewski`
},
{
  title: `Murder on the Orient Express`,
  author: `Agatha Christie`
},
{
  title: `A Little Princess`,
  author: `Frances Hodgson Burnett`
},
{
  title: `Into Thin Air: A Personal Account of the Mt. Everest Disaster`,
  author: `Jon Krakauer`
},
{
  title: `Uglies`,
  author: `Scott Westerfeld`
},
{
  title: `Bel Canto`,
  author: `Ann Patchett`
},
{
  title: `The Good Earth`,
  author: `Pearl S. Buck`
},
{
  title: `The World is Flat: A Brief History of the Twenty-First Century`,
  author: `Thomas L. Friedman`
},
{
  title: `Misery`,
  author: `Stephen King`
},
{
  title: `The Waste Lands`,
  author: `Stephen King`
},
{
  title: `Ready Player One`,
  author: `Ernest Cline`
},
{
  title: `Reading Lolita in Tehran: A Memoir in Books`,
  author: `Azar Nafisi`
},
{
  title: `Gödel, Escher, Bach: An Eternal Golden Braid`,
  author: `Douglas R. Hofstadter`
},
{
  title: `She's Come Undone`,
  author: `Wally Lamb`
},
{
  title: `Three Cups of Tea: One Man's Mission to Promote Peace ... One School at a Time`,
  author: `Greg Mortenson`
},
{
  title: `Guards! Guards!`,
  author: `Terry Pratchett`
},
{
  title: `Fast Food Nation`,
  author: `Eric Schlosser`
},
{
  title: `American Psycho`,
  author: `Bret Easton Ellis`
},
{
  title: `Little House in the Big Woods`,
  author: `Laura Ingalls Wilder`
},
{
  title: `Little Women / Good Wives`,
  author: `Louisa May Alcott`
},
{
  title: `Possession: A Romance`,
  author: `A. S. Byatt`
},
{
  title: `Naked`,
  author: `David Sedaris`
},
{
  title: `Timeline`,
  author: `Michael Crichton`
},
{
  title: `Snow Falling on Cedars: A Novel`,
  author: `David Guterson`
},
{
  title: `The Girl on the Train`,
  author: `Paula Hawkins`
},
{
  title: `The Hound of the Baskervilles`,
  author: `Sir Arthur Conan Doyle`
},
{
  title: `The Reptile Room`,
  author: `Lemony Snicket`
},
{
  title: `The Communist Manifesto`,
  author: `Karl Marx`
},
{
  title: `Carrie`,
  author: `Stephen King`
},
{
  title: `The Age of Innocence`,
  author: `Edith Wharton`
},
{
  title: `Lady Chatterley's Lover`,
  author: `D. H. Lawrence`
},
{
  title: `The Things They Carried`,
  author: `Tim O'Brien`
},
{
  title: `My Ántonia`,
  author: `Willa Cather`
},
{
  title: `Antigone / Oedipus Rex / Oedipus at Colonus`,
  author: `Sophocles`
},
{
  title: `The Hours`,
  author: `Michael Cunningham`
},
{
  title: `The Boy in the Striped Pajamas`,
  author: `John Boyne`
},
{
  title: `Steppenwolf`,
  author: `Hermann Hesse`
},
{
  title: `Bleak House`,
  author: `Charles Dickens`
},
{
  title: `I Know Why the Caged Bird Sings`,
  author: `Maya Angelou`
},
{
  title: `The Martian`,
  author: `Andy Weir`
},
{
  title: `On the Origin of Species`,
  author: `Charles Darwin`
},
{
  title: `The Witches`,
  author: `Roald Dahl`
},
{
  title: `Choke`,
  author: `Chuck Palahniuk`
},
{
  title: `The Prophet`,
  author: `Kahlil Gibran`
},
{
  title: `All the Light We Cannot See`,
  author: `Anthony Doerr`
},
{
  title: `Dragonfly in Amber`,
  author: `Diana Gabaldon`
},
{
  title: `Mythology`,
  author: `Edith Hamilton`
},
{
  title: `Little House on the Prairie`,
  author: `Laura Ingalls Wilder`
},
{
  title: `The Brief Wondrous Life of Oscar Wao`,
  author: `Junot Diaz`
},
{
  title: `Tuck Everlasting`,
  author: `Natalie Babbitt`
},
{
  title: `Walden`,
  author: `Henry David Thoreau`
},
{
  title: `John Adams`,
  author: `David McCullough`
},
{
  title: `The Hunchback of Notre Dame`,
  author: `Victor Hugo`
},
{
  title: `The Namesake`,
  author: `Jhumpa Lahiri`
},
{
  title: `Paper Towns`,
  author: `John Green`
},
{
  title: `The Virgin Suicides`,
  author: `Jeffrey Eugenides`
},
{
  title: `The Clan of the Cave Bear`,
  author: `Jean M. Auel`
},
{
  title: `Pet Sematary`,
  author: `Stephen King`
},
{
  title: `Insurgent`,
  author: `Veronica Roth`
},
{
  title: `The Immortal Life of Henrietta Lacks`,
  author: `Rebecca Skloot`
},
{
  title: `Wizard And Glass`,
  author: `Stephen King`
},
{
  title: `2001: A Space Odyssey`,
  author: `Arthur C. Clarke`
},
{
  title: `A Separate Peace`,
  author: `John Knowles`
},
{
  title: `The Long Dark Tea-Time of the Soul`,
  author: `Douglas Adams`
},
{
  title: `The Great Hunt`,
  author: `Robert Jordan`
},
{
  title: `The Maze Runner`,
  author: `James Dashner`
},
{
  title: `Children of Dune`,
  author: `Frank Herbert`
},
{
  title: `Tender is the Night`,
  author: `F. Scott Fitzgerald`
},
{
  title: `The Tempest`,
  author: `William Shakespeare`
},
{
  title: `Blindness`,
  author: `José Saramago`
},
{
  title: `Man's Search for Meaning`,
  author: `Viktor E. Frankl`
},
{
  title: `If You Give a Mouse a Cookie`,
  author: `Laura Joffe Numeroff`
},
{
  title: `Waiting for Godot`,
  author: `Samuel Beckett`
},
{
  title: `Because of Winn-Dixie`,
  author: `Kate DiCamillo`
},
{
  title: `Fantastic Beasts and Where to Find Them`,
  author: `J. K. Rowling`
},
{
  title: `Infinite Jest`,
  author: `David Foster Wallace`
},
{
  title: `Journey to the Center of the Earth`,
  author: `Jules Verne`
},
{
  title: `The Man in the High Castle`,
  author: `Philip K. Dick`
},
{
  title: `Ella Enchanted`,
  author: `Gail Carson Levine`
},
{
  title: `One Day in the Life of Ivan Denisovich`,
  author: `Alexander Solzhenitsyn`
},
{
  title: `The Cider House Rules`,
  author: `John Irving`
},
{
  title: `The Woman in White`,
  author: `Wilkie Collins`
},
{
  title: `Mostly Harmless`,
  author: `Douglas Adams`
},
{
  title: `Collapse: How Societies Choose to Fail or Succeed`,
  author: `Jared Diamond`
},
{
  title: `Thus Spoke Zarathustra`,
  author: `Friedrich Nietzsche`
},
{
  title: `One Fish, Two Fish, Red Fish, Blue Fish`,
  author: `Dr. Seuss`
},
{
  title: `The Devil Wears Prada`,
  author: `Lauren Weisberger`
},
{
  title: `The Adventures of Sherlock Holmes`,
  author: `Sir Arthur Conan Doyle`
},
{
  title: `The Tale of Despereaux: Being the Story of a Mouse, a Princess, Some Soup and a Spool of Thread`,
  author: `Kate DiCamillo`
},
{
  title: `Wyrd Sisters`,
  author: `Terry Pratchett`
},
{
  title: `The Pearl`,
  author: `John Steinbeck`
},
{
  title: `Foundation and Empire`,
  author: `Isaac Asimov`
},
{
  title: `Metamorphoses`,
  author: `Ovid`
},
{
  title: `Interpreter of Maladies`,
  author: `Jhumpa Lahiri`
},
{
  title: `One for the Money`,
  author: `Janet Evanovich`
},
{
  title: `World Without End`,
  author: `Ken Follett`
},
{
  title: `A Time to Kill`,
  author: `John Grisham`
},
{
  title: `Where the Red Fern Grows`,
  author: `Wilson Rawls`
},
{
  title: `Brideshead Revisited`,
  author: `Evelyn Waugh`
},
{
  title: `A Wind in the Door`,
  author: `Madeleine L'Engle`
},
{
  title: `1776`,
  author: `David McCullough`
},
{
  title: `Paradise Lost`,
  author: `John Milton`
},
{
  title: `Nine Stories`,
  author: `J. D. Salinger`
},
{
  title: `If on a Winter's Night a Traveler`,
  author: `Italo Calvino`
},
{
  title: `Wolf Hall`,
  author: `Hilary Mantel`
},
{
  title: `Stuart Little`,
  author: `E. B. White`
},
{
  title: `Living Dead in Dallas`,
  author: `Charlaine Harris`
},
{
  title: `Alexander and the Terrible, Horrible, No Good, Very Bad Day`,
  author: `Judith Viorst`
},
{
  title: `Snow Flower and the Secret Fan`,
  author: `Lisa See`
},
{
  title: `A Passage to India`,
  author: `E. M. Forster`
},
{
  title: `The Bluest Eye`,
  author: `Toni Morrison`
},
{
  title: `City of Ashes`,
  author: `Cassandra Clare`
},
{
  title: `Like Water for Chocolate`,
  author: `Laura Esquivel`
},
{
  title: `The Wide Window`,
  author: `Lemony Snicket`
},
{
  title: `The Professor and the Madman: A Tale of Murder, Insanity, and the Making of the Oxford English Dictionary (P.S.)`,
  author: `Simon Winchester`
},
{
  title: `The Ocean at the End of the Lane`,
  author: `Neil Gaiman`
},
{
  title: `The Complete Fairy Tales of the Brothers Grimm`,
  author: `Jacob Grimm`
},
{
  title: `Small Gods`,
  author: `Terry Pratchett`
},
{
  title: `The Queen of the Damned`,
  author: `Anne Rice`
},
{
  title: `White Oleander`,
  author: `Janet Fitch`
},
{
  title: `Xenocide`,
  author: `Orson Scott Card`
},
{
  title: `The Silence of the Lambs`,
  author: `Thomas Harris`
},
{
  title: `Alias Grace`,
  author: `Margaret Atwood`
},
{
  title: `Ivanhoe`,
  author: `Sir Walter Scott`
},
{
  title: `Ender's Shadow`,
  author: `Orson Scott Card`
},
{
  title: `Starship Troopers`,
  author: `Robert A. Heinlein`
},
{
  title: `The Last of the Mohicans`,
  author: `James Fenimore Cooper`
},
{
  title: `The Elegance of the Hedgehog`,
  author: `Muriel Barbery`
},
{
  title: `The English Patient`,
  author: `Michael Ondaatje`
},
{
  title: `The Dragon Reborn`,
  author: `Robert Jordan`
},
{
  title: `The Complete Sherlock Holmes`,
  author: `Sir Arthur Conan Doyle`
},
{
  title: `Going Postal`,
  author: `Terry Pratchett`
},
{
  title: `The Satanic Verses`,
  author: `Salman Rushdie`
},
{
  title: `The Sandman: Preludes and Nocturnes`,
  author: `Neil Gaiman`
},
{
  title: `Getting Things Done: The Art of Stress-Free Productivity`,
  author: `David Allen`
},
{
  title: `The Firm`,
  author: `John Grisham`
},
{
  title: `The Goldfinch`,
  author: `Donna Tartt`
},
{
  title: `Winnie-the-Pooh`,
  author: `A. A. Milne`
},
{
  title: `The Velveteen Rabbit`,
  author: `Margery Williams`
},
{
  title: `The Diamond Age`,
  author: `Neal Stephenson`
},
{
  title: `Notes from Underground`,
  author: `Fyodor Dostoevsky`
},
{
  title: `Marley &amp; Me`,
  author: `John Grogan`
},
{
  title: `A Swiftly Tilting Planet`,
  author: `Madeleine L'Engle`
},
{
  title: `Corduroy`,
  author: `Don Freeman`
},
{
  title: `The Green Mile`,
  author: `Stephen King`
},
{
  title: `How to Win Friends &amp; Influence People`,
  author: `Dale Carnegie`
},
{
  title: `Second Foundation`,
  author: `Isaac Asimov`
},
{
  title: `The Complete Tales and Poems of Edgar Allan Poe`,
  author: `Edgar Allan Poe`
},
{
  title: `Cell`,
  author: `Stephen King`
},
{
  title: `Brown Bear, Brown Bear, What Do You See?`,
  author: `Bill Jr. Martin`
},
{
  title: `A Room of One's Own`,
  author: `Virginia Woolf`
},
{
  title: `Divine Secrets of the Ya-Ya Sisterhood`,
  author: `Rebecca Wells`
},
{
  title: `Reaper Man`,
  author: `Terry Pratchett`
},
{
  title: `Nickel and Dimed: On (Not) Getting By in America`,
  author: `Barbara Ehrenreich`
},
{
  title: `Naked Lunch`,
  author: `William S. Burroughs`
},
{
  title: `Diary of a Wimpy Kid`,
  author: `Jeff Kinney`
},
{
  title: `The Phantom of the Opera`,
  author: `Gaston Leroux`
},
{
  title: `Night Watch`,
  author: `Terry Pratchett`
},
{
  title: `Death of a Salesman`,
  author: `Arthur Miller`
},
{
  title: `Wolves of the Calla`,
  author: `Stephen King`
},
{
  title: `Utopia`,
  author: `Thomas More`
},
{
  title: `The Arctic Incident`,
  author: `Eoin Colfer`
},
{
  title: `Julius Caesar`,
  author: `William Shakespeare`
},
{
  title: `The Snowy Day`,
  author: `Ezra Jack Keats`
},
{
  title: `Voyager`,
  author: `Diana Gabaldon`
},
{
  title: `Sarah's Key`,
  author: `Tatiana de Rosnay`
},
{
  title: `Nineteen Minutes`,
  author: `Jodi Picoult`
},
{
  title: `Saturday`,
  author: `Ian McEwan`
},
{
  title: `11/22/63`,
  author: `Stephen King`
},
{
  title: `Jonathan Livingston Seagull`,
  author: `Richard Bach`
},
{
  title: `Assassin's Apprentice`,
  author: `Robin Hobb`
},
{
  title: `The Sisterhood of the Traveling Pants`,
  author: `Ann Brashares`
},
{
  title: `Chicka Chicka Boom Boom`,
  author: `Bill Jr. Martin`
},
{
  title: `Hogfather`,
  author: `Terry Pratchett`
},
{
  title: `A Canticle for Leibowitz`,
  author: `Walter M. Miller Jr.`
},
{
  title: `The Pelican Brief`,
  author: `John Grisham`
},
{
  title: `Thirteen Reasons Why`,
  author: `Jay Asher`
},
{
  title: `Disgrace`,
  author: `J. M. Coetzee`
},
{
  title: `The Jungle`,
  author: `Upton Sinclair`
},
{
  title: `Confessions of a Shopaholic`,
  author: `Sophie Kinsella`
},
{
  title: `Lamb: The Gospel According to Biff, Christ's Childhood Pal`,
  author: `Christopher Moore`
},
{
  title: `Club Dead`,
  author: `Charlaine Harris`
},
{
  title: `The Crying of Lot 49`,
  author: `Thomas Pynchon`
},
{
  title: `The Neverending Story`,
  author: `Michael Ende`
},
{
  title: `The Shadow Rising`,
  author: `Robert Jordan`
},
{
  title: `Anne of Avonlea`,
  author: `L. M. Montgomery`
},
{
  title: `Sourcery`,
  author: `Terry Pratchett`
},
{
  title: `The Hunt for Red October`,
  author: `Tom Clancy`
},
{
  title: `Pyramids`,
  author: `Terry Pratchett`
},
{
  title: `I Know This Much is True`,
  author: `Wally Lamb`
},
{
  title: `The Complete Harry Potter Collection (Books 1-7)`,
  author: `J. K. Rowling`
},
{
  title: `The Portrait of a Lady`,
  author: `Henry James`
},
{
  title: `The Absolutely True Diary of a Part-Time Indian`,
  author: `Sherman Alexie`
},
{
  title: `Gilead`,
  author: `Marilynne Robinson`
},
{
  title: `City of Glass`,
  author: `Cassandra Clare`
},
{
  title: `The Man Who Mistook His Wife for a Hat and Other Clinical Tales`,
  author: `Oliver Sacks`
},
{
  title: `Under the Dome`,
  author: `Stephen King`
},
{
  title: `White Noise`,
  author: `Don DeLillo`
},
{
  title: `The Miserable Mill`,
  author: `Lemony Snicket`
},
{
  title: `Stranger in a Strange Land`,
  author: `Robert A. Heinlein`
},
{
  title: `A Connecticut Yankee in King Arthur's Court`,
  author: `Mark Twain`
},
{
  title: `The Yiddish Policemen's Union`,
  author: `Michael Chabon`
},
{
  title: `About a Boy`,
  author: `Nick Hornby`
},
{
  title: `Bag of Bones`,
  author: `Stephen King`
},
{
  title: `The Selfish Gene`,
  author: `Richard Dawkins`
},
{
  title: `Gravity's Rainbow`,
  author: `Thomas Pynchon`
},
{
  title: `Smoke and Mirrors: Short Fictions and Illusions`,
  author: `Neil Gaiman`
},
{
  title: `No Country for Old Men`,
  author: `Cormac McCarthy`
},
{
  title: `Wizard's First Rule`,
  author: `Terry Goodkind`
},
{
  title: `The Dark Tower`,
  author: `Stephen King`
},
{
  title: `Anthem`,
  author: `Ayn Rand`
},
{
  title: `Pride and Prejudice and Zombies`,
  author: `Seth Grahame-Smith`
},
{
  title: `The Heart Is a Lonely Hunter`,
  author: `Carson McCullers`
},
{
  title: `Far from the Madding Crowd`,
  author: `Thomas Hardy`
},
{
  title: `Stiff: The Curious Lives of Human Cadavers`,
  author: `Mary Roach`
},
{
  title: `The Client`,
  author: `John Grisham`
},
{
  title: `The Great Divorce`,
  author: `C. S. Lewis`
},
{
  title: `The Wee Free Men`,
  author: `Terry Pratchett`
},
{
  title: `A Great and Terrible Beauty`,
  author: `Libba Bray`
},
{
  title: `Silas Marner`,
  author: `George Eliot`
},
{
  title: `Song of Susannah`,
  author: `Stephen King`
},
{
  title: `Dead to the World`,
  author: `Charlaine Harris`
},
{
  title: `Quidditch Through the Ages`,
  author: `Kennilworthy Whisp`
},
{
  title: `The Merchant of Venice`,
  author: `William Shakespeare`
},
{
  title: `The Westing Game`,
  author: `Ellen Raskin`
},
{
  title: `White Fang`,
  author: `Jack London`
},
{
  title: `A Million Little Pieces`,
  author: `James Frey`
},
{
  title: `The Eternity Code`,
  author: `Eoin Colfer`
},
{
  title: `The Fires of Heaven`,
  author: `Robert Jordan`
},
{
  title: `The Importance of Being Earnest`,
  author: `Oscar Wilde`
},
{
  title: `Thud!`,
  author: `Terry Pratchett`
},
{
  title: `Oh, the Places You'll Go!`,
  author: `Dr. Seuss`
},
{
  title: `Doctor Zhivago`,
  author: `Boris Pasternak`
},
{
  title: `Unbroken: A World War II Story of Survival, Resilience, and Redemption`,
  author: `Laura Hillenbrand`
},
{
  title: `Hard Times`,
  author: `Charles Dickens`
},
{
  title: `Hyperion`,
  author: `Dan Simmons`
},
{
  title: `Sabriel`,
  author: `Garth Nix`
},
{
  title: `The Godfather`,
  author: `Mario Puzo`
},
{
  title: `Something Wicked This Way Comes`,
  author: `Ray Bradbury`
},
{
  title: `The Bean Trees`,
  author: `Barbara Kingsolver`
},
{
  title: `The Tale of Peter Rabbit`,
  author: `Beatrix Potter`
},
{
  title: `The Moonstone`,
  author: `Wilkie Collins`
},
{
  title: `Blood Meridian: Or the Evening Redness in the West`,
  author: `Cormac McCarthy`
},
{
  title: `Meditations`,
  author: `Marcus Aurelius`
},
{
  title: `Drums of Autumn`,
  author: `Diana Gabaldon`
},
{
  title: `Men at Arms`,
  author: `Terry Pratchett`
},
{
  title: `Suite Française`,
  author: `Irène Némirovsky`
},
{
  title: `Needful Things`,
  author: `Stephen King`
},
{
  title: `Redwall`,
  author: `Brian Jacques`
},
{
  title: `Lord of Chaos`,
  author: `Robert Jordan`
},
{
  title: `All the Pretty Horses`,
  author: `Cormac McCarthy`
},
{
  title: `Soul Music`,
  author: `Terry Pratchett`
},
{
  title: `The Runaway Jury`,
  author: `John Grisham`
},
{
  title: `Swann's Way`,
  author: `Marcel Proust`
},
{
  title: `V for Vendetta`,
  author: `Alan Moore`
},
{
  title: `People of the Book`,
  author: `Geraldine Brooks`
},
{
  title: `The Sirens of Titan`,
  author: `Kurt Vonnegut`
},
{
  title: `The Austere Academy`,
  author: `Lemony Snicket`
},
{
  title: `Howl's Moving Castle`,
  author: `Diana Wynne Jones`
},
{
  title: `Inkspell`,
  author: `Cornelia Funke`
},
{
  title: `The Rainmaker`,
  author: `John Grisham`
},
{
  title: `Insomnia`,
  author: `Stephen King`
},
{
  title: `The Testament`,
  author: `John Grisham`
},
{
  title: `The Moon is a Harsh Mistress`,
  author: `Robert A. Heinlein`
},
{
  title: `Out of the Silent Planet`,
  author: `C. S. Lewis`
},
{
  title: `An Abundance of Katherines`,
  author: `John Green`
},
{
  title: `The Histories`,
  author: `Herodotus`
},
{
  title: `Song of Solomon`,
  author: `Toni Morrison`
},
{
  title: `Lost in a Good Book`,
  author: `Jasper Fforde`
},
{
  title: `Notes from a Small Island`,
  author: `Bill Bryson`
},
{
  title: `Witches Abroad`,
  author: `Terry Pratchett`
},
{
  title: `The Children of Húrin`,
  author: `J. R. R. Tolkien`
},
{
  title: `The Eyes of the Dragon`,
  author: `Stephen King`
},
{
  title: `A Room with a View`,
  author: `E. M. Forster`
},
{
  title: `Fifty Shades of Grey`,
  author: `E. L. James`
},
{
  title: `Jude the Obscure`,
  author: `Thomas Hardy`
},
{
  title: `The Red Badge of Courage`,
  author: `Stephen Crane`
},
{
  title: `Thief of Time`,
  author: `Terry Pratchett`
},
{
  title: `The New York Trilogy`,
  author: `Paul Auster`
},
{
  title: `Feet of Clay`,
  author: `Terry Pratchett`
},
{
  title: `God Emperor of Dune`,
  author: `Frank Herbert`
},
{
  title: `Prey`,
  author: `Michael Crichton`
},
{
  title: `Wonder`,
  author: `R. J. Palacio`
},
{
  title: `Are You My Mother?`,
  author: `P. D. Eastman`
},
{
  title: `A Crown of Swords`,
  author: `Robert Jordan`
},
{
  title: `Dr. Seuss's ABC: An Amazing Alphabet Book!`,
  author: `Dr. Seuss`
},
{
  title: `Fragile Things: Short Fictions and Wonders`,
  author: `Neil Gaiman`
},
{
  title: `On Beauty`,
  author: `Zadie Smith`
},
{
  title: `The Bourne Identity`,
  author: `Robert Ludlum`
},
{
  title: `Dead as a Doornail`,
  author: `Charlaine Harris`
},
{
  title: `Twelfth Night`,
  author: `William Shakespeare`
},
{
  title: `The Invisible Man`,
  author: `H. G. Wells`
},
{
  title: `Fool Moon`,
  author: `Jim Butcher`
},
{
  title: `The Lost World`,
  author: `Michael Crichton`
},
{
  title: `The Fifth Elephant`,
  author: `Terry Pratchett`
},
{
  title: `The Year of Magical Thinking`,
  author: `Joan Didion`
},
{
  title: `The Metamorphosis`,
  author: `Franz Kafka`
},
{
  title: `Graceling`,
  author: `Kristin Cashore`
},
{
  title: `The Witch of Blackbird Pond`,
  author: `Elizabeth George Speare`
},
{
  title: `Stargirl`,
  author: `Jerry Spinelli`
},
{
  title: `Maus I: A Survivor's Tale: My Father Bleeds History`,
  author: `Art Spiegelman`
},
{
  title: `The City of Ember`,
  author: `Jeanne DuPrau`
},
{
  title: `Allegiant`,
  author: `Veronica Roth`
},
{
  title: `Lords and Ladies`,
  author: `Terry Pratchett`
},
{
  title: `Orlando`,
  author: `Virginia Woolf`
},
{
  title: `Heidi`,
  author: `Johanna Spyri`
},
{
  title: `Roll of Thunder, Hear My Cry`,
  author: `Mildred D. Taylor`
},
{
  title: `Much Ado About Nothing`,
  author: `William Shakespeare`
},
{
  title: `The History of Love`,
  author: `Nicole Krauss`
},
{
  title: `Definitely Dead`,
  author: `Charlaine Harris`
},
{
  title: `The Witching Hour`,
  author: `Anne Rice`
},
{
  title: `Moving Pictures`,
  author: `Terry Pratchett`
},
{
  title: `The Invention of Hugo Cabret`,
  author: `Brian Selznick`
},
{
  title: `The Big Sleep`,
  author: `Raymond Chandler`
},
{
  title: `Ringworld`,
  author: `Larry Niven`
},
{
  title: `Hard-Boiled Wonderland and the End of the World`,
  author: `Haruki Murakami`
},
{
  title: `Sphere`,
  author: `Michael Crichton`
},
{
  title: `Cannery Row`,
  author: `John Steinbeck`
},
{
  title: `A Walk to Remember`,
  author: `Nicholas Sparks`
},
{
  title: `Red Dragon`,
  author: `Thomas Harris`
},
{
  title: `The Talisman`,
  author: `Stephen King`
},
{
  title: `The Andromeda Strain`,
  author: `Michael Crichton`
},
{
  title: `The White Tiger`,
  author: `Aravind Adiga`
},
{
  title: `Kitchen Confidential: Adventures in the Culinary Underbelly`,
  author: `Anthony Bourdain`
},
{
  title: `Quicksilver`,
  author: `Neal Stephenson`
},
{
  title: `Childhood's End`,
  author: `Arthur C. Clarke`
},
{
  title: `The True Story of the Three Little Pigs`,
  author: `Jon Scieszka`
},
{
  title: `Sons and Lovers`,
  author: `D. H. Lawrence`
},
{
  title: `Freedom`,
  author: `Jonathan Franzen`
},
{
  title: `The House of Mirth`,
  author: `Edith Wharton`
},
{
  title: `Kidnapped`,
  author: `Robert Louis Stevenson`
},
{
  title: `Bird by Bird: Some Instructions on Writing and Life`,
  author: `Anne Lamott`
},
{
  title: `The Partner`,
  author: `John Grisham`
},
{
  title: `The Oresteia: Agamemnon / The Libation Bearers / The Eumenides`,
  author: `Aeschylus`
},
{
  title: `Sarah, Plain and Tall`,
  author: `Patricia MacLachlan`
},
{
  title: `Prodigal Summer`,
  author: `Barbara Kingsolver`
},
{
  title: `Perdido Street Station`,
  author: `China Miéville`
},
{
  title: `The Ersatz Elevator`,
  author: `Lemony Snicket`
},
{
  title: `Cat's Eye`,
  author: `Margaret Atwood`
},
{
  title: `Hannibal`,
  author: `Thomas Harris`
},
{
  title: `Rendezvous With Rama`,
  author: `Arthur C. Clarke`
},
{
  title: `Nausea`,
  author: `Jean-Paul Sartre`
},
{
  title: `The Dead Zone`,
  author: `Stephen King`
},
{
  title: `The Art of Racing in the Rain`,
  author: `Garth Stein`
},
{
  title: `Mrs. Frisby and the Rats of NIMH`,
  author: `Robert C. O'Brien`
},
{
  title: `A Long Way Down`,
  author: `Nick Hornby`
},
{
  title: `The Path of Daggers`,
  author: `Robert Jordan`
},
{
  title: `Monstrous Regiment`,
  author: `Terry Pratchett`
},
{
  title: `Foundation's Edge`,
  author: `Isaac Asimov`
},
{
  title: `Pattern Recognition`,
  author: `William Gibson`
},
{
  title: `Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character`,
  author: `Richard Feynman`
},
{
  title: `Cutting for Stone`,
  author: `Abraham Verghese`
},
{
  title: `Ethan Frome`,
  author: `Edith Wharton`
},
{
  title: `Tales of a Fourth Grade Nothing`,
  author: `Judy Blume`
},
{
  title: `Jingo`,
  author: `Terry Pratchett`
},
{
  title: `Carpe Jugulum`,
  author: `Terry Pratchett`
},
{
  title: `Survivor`,
  author: `Chuck Palahniuk`
},
{
  title: `A Fine Balance`,
  author: `Rohinton Mistry`
},
{
  title: `The Epic of Gilgamesh`,
  author: `Anonymous`
},
{
  title: `When You Are Engulfed in Flames`,
  author: `David Sedaris`
},
{
  title: `The House on Mango Street`,
  author: `Sandra Cisneros`
},
{
  title: `Olive Kitteridge`,
  author: `Elizabeth Strout`
},
{
  title: `In a Sunburned Country`,
  author: `Bill Bryson`
},
{
  title: `On the Banks of Plum Creek`,
  author: `Laura Ingalls Wilder`
},
{
  title: `Empire Falls`,
  author: `Richard Russo`
},
{
  title: `Leaves of Grass`,
  author: `Walt Whitman`
},
{
  title: `Maskerade`,
  author: `Terry Pratchett`
},
{
  title: `Marked`,
  author: `P. C. Cast`
},
{
  title: `Flatland: A Romance of Many Dimensions`,
  author: `Edwin A. Abbott`
},
{
  title: `Quiet: The Power of Introverts in a World That Can't Stop Talking`,
  author: `Susan Cain`
},
{
  title: `The Last Lecture`,
  author: `Randy Pausch`
},
{
  title: `My Side of the Mountain`,
  author: `Jean Craighead George`
},
{
  title: `The Fiery Cross`,
  author: `Diana Gabaldon`
},
{
  title: `A Painted House`,
  author: `John Grisham`
},
{
  title: `The Street Lawyer`,
  author: `John Grisham`
},
{
  title: `Unfinished Tales of Númenor and Middle-earth`,
  author: `J. R. R. Tolkien`
},
{
  title: `The Dispossessed`,
  author: `Ursula K. Le Guin`
},
{
  title: `Anne of the Island`,
  author: `L. M. Montgomery`
},
{
  title: `Pretties`,
  author: `Scott Westerfeld`
},
{
  title: `The Alienist`,
  author: `Caleb Carr`
},
{
  title: `The Audacity of Hope: Thoughts on Reclaiming the American Dream`,
  author: `Barack Obama`
},
{
  title: `Dreams from My Father: A Story of Race and Inheritance`,
  author: `Barack Obama`
},
{
  title: `Team of Rivals: The Political Genius of Abraham Lincoln`,
  author: `Doris Kearns Goodwin`
},
{
  title: `Inferno`,
  author: `Dan Brown`
},
{
  title: `Guilty Pleasures`,
  author: `Laurell K. Hamilton`
},
{
  title: `The Hostile Hospital`,
  author: `Lemony Snicket`
},
{
  title: `Love You Forever`,
  author: `Robert Munsch`
},
{
  title: `The Lost Hero`,
  author: `Rick Riordan`
},
{
  title: `Desperation`,
  author: `Stephen King`
},
{
  title: `Bridget Jones: The Edge of Reason`,
  author: `Helen Fielding`
},
{
  title: `In the Woods`,
  author: `Tana French`
},
{
  title: `Cujo`,
  author: `Stephen King`
},
{
  title: `Everything's Eventual: 14 Dark Tales`,
  author: `Stephen King`
},
{
  title: `The Awakening`,
  author: `Kate Chopin`
},
{
  title: `Winter's Heart`,
  author: `Robert Jordan`
},
{
  title: `The Casual Vacancy`,
  author: `J. K. Rowling`
},
{
  title: `Nicomachean Ethics`,
  author: `Aristoteles`
},
{
  title: `The Trumpet of the Swan`,
  author: `E. B. White`
},
{
  title: `Stranger in a Strange Land (Uncut Edition)`,
  author: `Robert A. Heinlein`
},
{
  title: `All Together Dead`,
  author: `Charlaine Harris`
},
{
  title: `I Capture the Castle`,
  author: `Dodie Smith`
},
{
  title: `Cry, the Beloved Country`,
  author: `Alan Paton`
},
{
  title: `The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory`,
  author: `Brian Greene`
},
{
  title: `The Brethren`,
  author: `John Grisham`
},
{
  title: `The Broker`,
  author: `John Grisham`
},
{
  title: `Light in August`,
  author: `William Faulkner`
},
{
  title: `Dreamcatcher`,
  author: `Stephen King`
},
{
  title: `The Jungle Book`,
  author: `Rudyard Kipling`
},
{
  title: `The Name of the Rose: including the Author's Postscript`,
  author: `Umberto Eco`
},
{
  title: `The Tale of the Body Thief`,
  author: `Anne Rice`
},
{
  title: `Charlie and the Great Glass Elevator`,
  author: `Roald Dahl`
},
{
  title: `The Decameron`,
  author: `Giovanni Boccaccio`
},
{
  title: `The Bonfire of the Vanities`,
  author: `Tom Wolfe`
},
{
  title: `Children of the Mind`,
  author: `Orson Scott Card`
},
{
  title: `This Side of Paradise`,
  author: `F. Scott Fitzgerald`
},
{
  title: `A Widow for One Year`,
  author: `John Irving`
},
{
  title: `Firestarter`,
  author: `Stephen King`
},
{
  title: `The Plot against America`,
  author: `Philip Roth`
},
{
  title: `The Passage`,
  author: `Justin Cronin`
},
{
  title: `The Pact`,
  author: `Jodi Picoult`
},
{
  title: `Guess How Much I Love You`,
  author: `Sam McBratney`
},
{
  title: `The Story of Edgar Sawtelle`,
  author: `David Wroblewski`
},
{
  title: `Lullaby`,
  author: `Chuck Palahniuk`
},
{
  title: `The Bhagavad Gita`,
  author: `Anonymous`
},
{
  title: `The Nanny Diaries`,
  author: `Emma McLaughlin`
},
{
  title: `The Magicians`,
  author: `Lev Grossman`
},
{
  title: `Year of Wonders`,
  author: `Geraldine Brooks`
},
{
  title: `Master and Commander`,
  author: `Patrick O'Brian`
},
{
  title: `On Chesil Beach`,
  author: `Ian McEwan`
},
{
  title: `Persepolis: The Story of a Childhood`,
  author: `Marjane Satrapi`
},
{
  title: `Confessions of an Ugly Stepsister: A Novel`,
  author: `Gregory Maguire`
},
{
  title: `The Imitation of Christ`,
  author: `Thomas à Kempis`
},
{
  title: `Beyond Good and Evil: Prelude to a Philosophy of the Future`,
  author: `Friedrich Nietzsche`
},
{
  title: `Two for the Dough`,
  author: `Janet Evanovich`
},
{
  title: `The Federalist Papers`,
  author: `Alexander Hamilton`
},
{
  title: `A Discovery of Witches`,
  author: `Deborah Harkness`
},
{
  title: `I, Claudius`,
  author: `Robert Graves`
},
{
  title: `The Red and the Black`,
  author: `Stendhal`
},
{
  title: `The Forever War`,
  author: `Joe Haldeman`
},
{
  title: `The Tommyknockers`,
  author: `Stephen King`
},
{
  title: `A Moveable Feast`,
  author: `Ernest Hemingway`
},
{
  title: `Chronicle of a Death Foretold`,
  author: `Gabriel Garcia Marquez`
},
{
  title: `The Opal Deception`,
  author: `Eoin Colfer`
},
{
  title: `Dragonflight`,
  author: `Anne McCaffrey`
},
{
  title: `The Girl Who Loved Tom Gordon`,
  author: `Stephen King`
},
{
  title: `Mistborn: The Final Empire`,
  author: `Brandon Sanderson`
},
{
  title: `Walk Two Moons`,
  author: `Sharon Creech`
},
{
  title: `The Chamber`,
  author: `John Grisham`
},
{
  title: `The Magic Mountain`,
  author: `Thomas Mann`
},
{
  title: `Make Way for Ducklings`,
  author: `Robert McCloskey`
},
{
  title: `The Amulet of Samarkand`,
  author: `Jonathan Stroud`
},
{
  title: `The Maltese Falcon`,
  author: `Dashiell Hammett`
},
{
  title: `Daughter of fortune : A novel`,
  author: `Isabel Allende`
},
{
  title: `Bossypants`,
  author: `Tina Fey`
},
{
  title: `Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time`,
  author: `Dava Sobel`
},
{
  title: `The Rule of Four`,
  author: `Ian Caldwell`
},
{
  title: `The Well of Lost Plots`,
  author: `Jasper Fforde`
},
{
  title: `Odd Thomas`,
  author: `Dean Koontz`
},
{
  title: `The Carnivorous Carnival`,
  author: `Lemony Snicket`
},
{
  title: `Howards End`,
  author: `E. M. Forster`
},
{
  title: `Crossroads of Twilight`,
  author: `Robert Jordan`
},
{
  title: `Under the Banner of Heaven: A Story of Violent Faith`,
  author: `Jon Krakauer`
},
{
  title: `State of Fear`,
  author: `Michael Crichton`
},
{
  title: `The Thief Lord`,
  author: `Cornelia Funke`
},
{
  title: `The Slippery Slope`,
  author: `Lemony Snicket`
},
{
  title: `The Twits`,
  author: `Roald Dahl`
},
{
  title: `Eric`,
  author: `Terry Pratchett`
},
{
  title: `Son of a Witch`,
  author: `Gregory Maguire`
},
{
  title: `Dead Souls`,
  author: `Nikolai Gogol`
},
{
  title: `Tropic of Cancer`,
  author: `Henry Miller`
},
{
  title: `Invisible Cities`,
  author: `Italo Calvino`
},
{
  title: `Lord Jim`,
  author: `Joseph Conrad`
},
{
  title: `The Last Continent`,
  author: `Terry Pratchett`
},
{
  title: `From Dead to Worse`,
  author: `Charlaine Harris`
},
{
  title: `The Tao of Pooh`,
  author: `Benjamin Hoff`
},
{
  title: `The Hero with a Thousand Faces`,
  author: `Joseph Campbell`
},
{
  title: `Different Seasons`,
  author: `Stephen King`
},
{
  title: `The Vile Village`,
  author: `Lemony Snicket`
},
{
  title: `Invisible Monsters`,
  author: `Chuck Palahniuk`
},
{
  title: `Fried Green Tomatoes at the Whistle Stop Cafe: A Novel`,
  author: `Fannie Flagg`
},
{
  title: `Bud, Not Buddy`,
  author: `Christopher Paul Curtis`
},
{
  title: `The Autobiography of Malcolm X`,
  author: `Malcolm X`
},
{
  title: `Madeline`,
  author: `Ludwig Bemelmans`
},
{
  title: `Farmer Boy`,
  author: `Laura Ingalls Wilder`
},
{
  title: `Go Ask Alice`,
  author: `Beatrice Sparks`
},
{
  title: `Memnoch the Devil`,
  author: `Anne Rice`
},
{
  title: `Interesting Times`,
  author: `Terry Pratchett`
},
{
  title: `The Wise Man's Fear`,
  author: `Patrick Rothfuss`
},
{
  title: `The Lies of Locke Lamora`,
  author: `Scott Lynch`
},
{
  title: `The Other Hand`,
  author: `Chris Cleave`
},
{
  title: `Making Money`,
  author: `Terry Pratchett`
},
{
  title: `The Pickwick Papers`,
  author: `Charles Dickens`
},
{
  title: `Contact`,
  author: `Carl Sagan`
},
{
  title: `The Truth`,
  author: `Terry Pratchett`
},
{
  title: `Grave Peril`,
  author: `Jim Butcher`
},
{
  title: `Gathering Blue`,
  author: `Lois Lowry`
},
{
  title: `Click, Clack, Moo: Cows That Type`,
  author: `Doreen Cronin`
},
{
  title: `The Killer Angels`,
  author: `Michael Shaara`
},
{
  title: `Clockwork Angel`,
  author: `Cassandra Clare`
},
{
  title: `How to Be Good`,
  author: `Nick Hornby`
},
{
  title: `A Breath of Snow and Ashes`,
  author: `Diana Gabaldon`
},
{
  title: `Who Moved My Cheese?`,
  author: `Spencer Johnson`
},
{
  title: `By the Shores of Silver Lake`,
  author: `Laura Ingalls Wilder`
},
{
  title: `A Child Called "It"`,
  author: `Dave Pelzer`
},
{
  title: `The Tombs of Atuan`,
  author: `Ursula K. Le Guin`
},
{
  title: `Maniac Magee`,
  author: `Jerry Spinelli`
},
{
  title: `Wild Swans: Three Daughters of China`,
  author: `Jung Chang`
},
{
  title: `Matched`,
  author: `Ally Condie`
},
{
  title: `Night Shift`,
  author: `Stephen King`
},
{
  title: `The Angel's Game`,
  author: `Carlos Ruiz Zafón`
},
{
  title: `The Valley of Horses`,
  author: `Jean M. Auel`
},
{
  title: `Pippi Longstocking`,
  author: `Astrid Lindgren`
},
{
  title: `The Long Winter`,
  author: `Laura Ingalls Wilder`
},
{
  title: `Villette`,
  author: `Charlotte Brontë`
},
{
  title: `The Mill on the Floss`,
  author: `George Eliot`
},
{
  title: `Perelandra`,
  author: `C. S. Lewis`
},
{
  title: `Esperanza Rising`,
  author: `Pam Muñoz Ryan`
},
{
  title: `Of Human Bondage`,
  author: `W. Somerset Maugham`
},
{
  title: `Just So Stories`,
  author: `Rudyard Kipling`
},
{
  title: `Christine`,
  author: `Stephen King`
},
{
  title: `The Dark Half`,
  author: `Stephen King`
},
{
  title: `The Sandman: The Doll's House`,
  author: `Neil Gaiman`
},
{
  title: `Cloudy with a Chance of Meatballs`,
  author: `Judi Barrett`
},
{
  title: `The Last Juror`,
  author: `John Grisham`
},
{
  title: `Thinking, Fast and Slow`,
  author: `Daniel Kahneman`
},
{
  title: `The Illustrated Man`,
  author: `Ray Bradbury`
},
{
  title: `The Dark Is Rising`,
  author: `Susan Cooper`
},
{
  title: `Fathers and Sons`,
  author: `Ivan Turgenev`
},
{
  title: `A Light in the Attic`,
  author: `Shel Silverstein`
},
{
  title: `Kim`,
  author: `Rudyard Kipling`
},
{
  title: `The Murder of Roger Ackroyd`,
  author: `Agatha Christie`
},
{
  title: `The Mayor of Casterbridge`,
  author: `Thomas Hardy`
},
{
  title: `The Pilot's Wife`,
  author: `Anita Shreve`
},
{
  title: `The Cuckoo's Calling`,
  author: `Robert Galbraith`
},
{
  title: `Case Histories`,
  author: `Kate Atkinson`
},
{
  title: `The Five Love Languages`,
  author: `Gary D. Chapman`
},
{
  title: `Captain Corelli's Mandolin`,
  author: `Louis De Bernières`
},
{
  title: `'Tis: A Memoir`,
  author: `Frank McCourt`
},
{
  title: `The Mouse and the Motorcycle`,
  author: `Beverly Cleary`
},
{
  title: `The Summons`,
  author: `John Grisham`
},
{
  title: `The Bonesetter's Daughter`,
  author: `Amy Tan`
},
{
  title: `God Is Not Great: How Religion Poisons Everything`,
  author: `Christopher Hitchens`
},
{
  title: `Holidays on Ice: Stories`,
  author: `David Sedaris`
},
{
  title: `Cinder`,
  author: `Marissa Meyer`
},
{
  title: `The King of Torts`,
  author: `John Grisham`
},
{
  title: `The House of the Seven Gables`,
  author: `Nathaniel Hawthorne`
},
{
  title: `Chocolat`,
  author: `Joanne Harris`
},
{
  title: `America (The Book): A Citizen's Guide to Democracy Inaction`,
  author: `Jon Stewart`
},
{
  title: `The Prince and the Pauper`,
  author: `Mark Twain`
},
{
  title: `The Hobbit / The Lord of the Rings`,
  author: `J. R. R. Tolkien`
},
{
  title: `Breakfast at Tiffany's: A Short Novel and Three Stories`,
  author: `Truman Capote`
},
{
  title: `The Angel Experiment (Maximum Ride, Book 1)`,
  author: `James Patterson`
},
{
  title: `Hearts In Atlantis`,
  author: `Stephen King`
},
{
  title: `Underworld`,
  author: `Don DeLillo`
},
{
  title: `Travels with Charley: In Search of America`,
  author: `John Steinbeck`
},
{
  title: `The Scarlet Pimpernel`,
  author: `Baroness Orczy`
},
{
  title: `Skeleton Crew`,
  author: `Stephen King`
},
{
  title: `Till We Have Faces: A Myth Retold`,
  author: `C. S. Lewis`
},
{
  title: `The Polar Express`,
  author: `Chris Van Allsburg`
},
{
  title: `A Visit from the Goon Squad`,
  author: `Jennifer Egan`
},
{
  title: `Dead and Gone`,
  author: `Charlaine Harris`
},
{
  title: `A Hat Full of Sky`,
  author: `Terry Pratchett`
},
{
  title: `Anathem`,
  author: `Neal Stephenson`
},
{
  title: `Animal, Vegetable, Miracle: A Year of Food Life`,
  author: `Barbara Kingsolver`
},
{
  title: `Lisey's Story`,
  author: `Stephen King`
},
{
  title: `The Taming of the Shrew`,
  author: `William Shakespeare`
},
{
  title: `The Hiding Place`,
  author: `Corrie Ten Boom`
},
{
  title: `The Little Engine That Could`,
  author: `Watty Piper`
},
{
  title: `1st To Die`,
  author: `James Patterson`
},
{
  title: `The Mammoth Hunters`,
  author: `Jean M. Auel`
},
{
  title: `Bury My Heart at Wounded Knee: An Indian History of the American West`,
  author: `Dee Brown`
},
{
  title: `Rosencrantz and Guildenstern Are Dead`,
  author: `Tom Stoppard`
},
{
  title: `Wintersmith`,
  author: `Terry Pratchett`
},
{
  title: `Hoot`,
  author: `Carl Hiaasen`
},
{
  title: `The Problem of Pain`,
  author: `C. S. Lewis`
},
{
  title: `Hop on Pop`,
  author: `Dr. Seuss`
},
{
  title: `Duma Key`,
  author: `Stephen King`
},
{
  title: `Nightmares &amp; Dreamscapes`,
  author: `Stephen King`
},
{
  title: `American Pastoral`,
  author: `Philip Roth`
},
{
  title: `Baudolino`,
  author: `Umberto Eco`
},
{
  title: `Fingersmith`,
  author: `Sarah Waters`
},
{
  title: `Congo`,
  author: `Michael Crichton`
},
{
  title: `Royal Assassin`,
  author: `Robin Hobb`
},
{
  title: `The Sonnets`,
  author: `William Shakespeare`
},
{
  title: `The Case for Christ: A Journalist's Personal Investigation of the Evidence for Jesus`,
  author: `Lee Strobel`
},
{
  title: `If I Stay`,
  author: `Gayle Forman`
},
{
  title: `The Black Swan: The Impact of the Highly Improbable`,
  author: `Nassim Nicholas Taleb`
},
{
  title: `Dolores Claiborne`,
  author: `Stephen King`
},
{
  title: `Steve Jobs`,
  author: `Walter Isaacson`
},
{
  title: `Shiver`,
  author: `Maggie Stiefvater`
},
{
  title: `Shogun`,
  author: `James Clavell`
},
{
  title: `Three to Get Deadly`,
  author: `Janet Evanovich`
},
{
  title: `A Wild Sheep Chase`,
  author: `Haruki Murakami`
},
{
  title: `The Hotel New Hampshire`,
  author: `John Irving`
},
{
  title: `Haunted`,
  author: `Chuck Palahniuk`
},
{
  title: `Specials`,
  author: `Scott Westerfeld`
},
{
  title: `Frog and Toad Are Friends`,
  author: `Arnold Lobel`
},
{
  title: `Tom Jones`,
  author: `Henry Fielding`
},
{
  title: `Wide Sargasso Sea`,
  author: `Jean Rhys`
},
{
  title: `Little Town on the Prairie`,
  author: `Laura Ingalls Wilder`
},
{
  title: `Old Man's War`,
  author: `John Scalzi`
},
{
  title: `Four to Score`,
  author: `Janet Evanovich`
},
{
  title: `The return of the native`,
  author: `Thomas Hardy`
},
{
  title: `We Need To Talk About Kevin`,
  author: `Lionel Shriver`
},
{
  title: `Pale Fire`,
  author: `Vladimir Nabokov`
},
{
  title: `Trainspotting`,
  author: `Irvine Welsh`
},
{
  title: `Gerald's Game`,
  author: `Stephen King`
},
{
  title: `The Dante Club`,
  author: `Matthew Pearl`
},
{
  title: `Mr. Popper's Penguins`,
  author: `Richard Atwater`
},
{
  title: `The Sense of an Ending`,
  author: `Julian Barnes`
},
{
  title: `Prelude to Foundation`,
  author: `Isaac Asimov`
},
{
  title: `The Cost of Discipleship`,
  author: `Dietrich Bonhoeffer`
},
{
  title: `Knife of Dreams`,
  author: `Robert Jordan`
},
{
  title: `Summer Knight`,
  author: `Jim Butcher`
},
{
  title: `Doomsday Book`,
  author: `Connie Willis`
},
{
  title: `The Castle`,
  author: `Franz Kafka`
},
{
  title: `The Spy Who Came in from the Cold`,
  author: `John le Carré`
},
{
  title: `His Majesty's Dragon`,
  author: `Naomi Novik`
},
{
  title: `Good to Great: Why Some Companies Make the Leap... and Others Don't`,
  author: `Jim Collins`
},
{
  title: `A Manual for Writers of Term Papers, Theses, and Dissertations`,
  author: `Kate L. Turabian`
},
{
  title: `Dear John`,
  author: `Nicholas Sparks`
},
{
  title: `Heretics of Dune`,
  author: `Frank Herbert`
},
{
  title: `Red Mars`,
  author: `Kim Stanley Robinson`
},
{
  title: `The Robber Bride`,
  author: `Margaret Atwood`
},
{
  title: `Galápagos`,
  author: `Kurt Vonnegut`
},
{
  title: `The Sweetness at the Bottom of the Pie`,
  author: `Alan Bradley`
},
{
  title: `The Mother Tongue`,
  author: `Bill Bryson`
},
{
  title: `Smilla's Sense of Snow`,
  author: `Peter Høeg`
},
{
  title: `Narrative of the Life of Frederick Douglass, an American Slave`,
  author: `Frederick Douglass`
},
{
  title: `The Red Pyramid`,
  author: `Rick Riordan`
}];