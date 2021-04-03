module.exports = {
	name: 'fakten',
	description: 'Fakten rund um die Welt!',
	cooldown: 5,
	execute(message, args) {
		const messages = [
			"Wusstest du? Der Neeonbot sollte eigentlich nur ein Spaßprojekt unter Freunden werden.",
			"Wusstest du? Der Neeontester xsilentdeathx777 streamt auf Twitch!",
			"Wusstest du? Bananen sind krumm weil sie in Richtung der Sonne wachsen.",
			"Wusstest du? Billy-Ziegen urinieren auf ihre eigenen Köpfe um attraktiver für Weibchen zu riechen.",
			"Wusstest du? Wenn Pinocchio sagt “Meine Nase wächst gerade” geschieht das Lügner Paradox.",
			"Wusstest du? Polarbären können bis zu 86 Pinguine essen.",
			"Wusstest du? König Henry VIII schlief mit einer riesigen Axt neben seinem Bett.",
			"Wusstest du? Das Brüllen eines Löwen kann bis zu 8 km gehört werden.",
			"Wusstest du? 95% der Menschen texten Dinge, die sie nie persönlich sagen würden.",
			"Wusstest du? Ein Krokodil kann nicht seine Zunge rausstrecken.",
			"Wusstest du? Die Anzahl der Stufen des Eifelturms beträgt 1665.",
			"Wusstest du? Der Twitter-Vogel hat einen Namen – Larry.",
			"Wusstest du? Am 18. Februar 1979 schneite es in der Wüste von Sahara für 30 Minuten.",
			"Wusstest du? Wenn du alles in letzter Minute machst … dauert es nur eine Minute.",
			"Wusstest du? Im Gegensatz zu vielen anderen Großkatzen sind Schneeleoparden nicht aggressiv gegenüber Menschen. Es gibt keinen bestätigten Schneeleoparden-Angriff.",
			"Wusstest du? Vögel urinieren nicht.",
			"Wusstest du? Es ist ein Fakt, das dies ein Fakt ist!",
			"Wusstest du? Sterben im Parlamentshaus ist verboten – das wurde von den britischen Bürgern als das lächerlichste Gesetzt gewählt.",
			"Wusstest du? Der 20. Mai ist bekannt als “Snowman Burning Day”.",
			"Wusstest du? Schnecken haben 4 Nasen.",
			"Wusstest du? Ein Apfel, eine Kartoffel und eine Zwiebel schmecken genau gleich wenn die Nase geschlossen ist.",
			"Wusstest du? Der durchschnittliche Mensch läuft in seinem Leben ca. zweimal um die Erde.",
			"Wusstest du? Die Bibel ist das meist geklaute Buch der Welt.",
			"Wusstest du? Mel Blanc, die Stimme von Bugs Bunny, war gegen Karotten allergisch.",
			"Wusstest du? Kalifornien hat 6 Führerscheine ausgestellt mit den Namen Jesus Christus.",
			"Wusstest du? Nach Genisis 1:20-22 kam das Huhn vor dem Ei.",
			"Wusstest du? In der Karibik gibt es Austern, die Bäume hochklettern können.",
			"Wusstest du? Eichhörnchen vergessen die Hälft der Orte, an denen Sie Nüsse versteckt haben.",
			"Wusstest du? Über 1.000 Vögel sterben indem sie gegen Fensterscheiben fliegen.",
			"Wusstest du? Der Erfinder des Waffeleisens mag keine Waffeln.",
			"Wusstest du? George W. Bush war mal ein Cheerleader.",
			"Wusstest du? Insgesamt gibt es 205 Knochen im Skeletts eines Pferdes.",
			"Wusstest du? Jedes Jahr sterben 2.500 Linkshänder durch die Verwendung von Rechtshänder-Produkten.",
			"Wusstest du? Ronald McDonald wird in Japan “Donald McDonald” genannt, da die Aussprache leichter ist. In Singapur heißt er “Onkel McDonald”",
			"Wusstest du? Kleenex-Tücher wurden ursprünglich als Filter für Gasmasken verwendet.",
			"Wusstest du? 2012 wurde in New York City eine neue Ameisenart entdeckt. Wissenschaftler tauften die Ameisenart die „ManhattAnt“.",
			"Wusstest du? Die längste Limousine der Welt ist fast 31 Meter lang und hat 26 Räder. Sie ist mit einem King-Size Wasserbett ausgestattet und besitzt einen kleinen Helikopter-Landeplatz sowie einen Swimmingpool.",
			"Wusstest du? In den USA ist es gesetzlich vorgeschrieben, dass Eier vor dem Verkauf gewaschen werden müssen. Die EU schreibt jedoch vor, dass Eier vor dem Verkauf nicht gewaschen werden dürfen. Beide Gesetze wurden zum Schutz vor Salmonellen eingeführt.",
			"Wusstest du? „Snakes Venom“ ist das stärkste Bier der Welt mit 67,5 % Alkohol. Es enthält damit mehr Alkohol als Whiskey.",
			"Wusstest du? Die NASA besitzt zwei identische Satelliten, die die Erde umkreisen und immer wieder den Abstand zueinander messen, um Abweichungen der Gravitation zu entdecken. Ihr Spitzname ist „Tom“ und „Jerry“, da immer ein Satellit den anderen „jagt“.",
			"Wusstest du? Unabhängig von der Größe benötigen alle Säugetiere im Durchschnitt circa 21 Sekunden, um ihre Blase zu entleeren. Wissenschaftler sprechen hierbei auch vom „Gesetz des Urinierens“.",
			"Wusstest du? Das größte Kino der Welt ist das Kinepolis in Madrid mit insgesamt 25 verschiedenen Sälen und 9.200 Sitzplätzen.",
			"Wusstest du? Würde man ein iPhone mit Benzin betreiben können, würde bereits ein Tropfen ausreichen, um das Smartphone einen ganzen Tag verwenden zu können.",
			"Wusstest du? Manche Straßen in Australien sind so lang, dass der australische Staat dem Risiko der Müdigkeit durch kleine Trivia-Spiele am Straßenrand entgegenwirkt.",
			"Wusstest du? Die „Blue Java“ Banane ist eine spezielle Form der Banane mit blauem Äußeren und leichtem Vanillegeschmack.",
			"Wusstest du? Seit 1896 gilt, das ein Fußballfeld in Deutschland baumfrei sein muss",
			"Wusstest du? dass das das Gehirn überflüssige Sachen ausblendet, wie z.B. das zweite „das“ im Satz?",
			"Wusstest du? 2002 trat der Langstreckenläufer Tom Johnson in einem 80-Kilometer-Rennen gegen ein Pferd an. Er lief die Strecke in fünf Stunden und 45 Minuten und kam damit zehn Sekunden vor dem Pferd an.",
			"Wusstest du? Der „Dingozaun“ ist ein Zaun in Australien, der Schafe im Südosten des Kontinents vor Raubtieren schützen soll. Er hat eine Gesamtlänge von 5.412 Kilometern.",
			"Wusstest du? Wenn man sich einredet, dass man in der vergangenen Nacht gut geschlafen hat, obwohl dies nicht der Fall war, fühlt man sich dennoch weniger Müde. Man spricht hierbei vom Placebo-Schlaf.",
			"Wusstest du? Eine Kreuzung aus Zebra und Pferd bezeichnet man als „Zorse“.",
			"Wusstest du? Die westindischen Inseln liegen östlich vor Mittelamerika im Atlantik.",
			"Wusstest du? Man kann sich die jeweils ältere Version von Neeon auf Github kostenlos herunterladen!",
			"Wusstest du? Erste Artgenossen des Schimpansen benutzen mittlerweile Steine als Werkzeuge, um z.B. Früchte zu öffnen. Somit hat für Schimpansen offiziell die Steinzeit begonnen.",
			"Wusstest du? Im Dezember 2013 hatte die Dating-App Tinder ihr erstes Matching in der Antarktis. Es war zwischen einem Wissenschaftler und einer Besucherin, die lediglich einen Helikopterflug von 45 Minuten entfernt voneinander waren.",
			"Wusstest du? Mittlerweile ist die Erde von so viel Weltraumschrott umgeben, dass es in naher Zukunft sogar gefährlich werden kann, die Erde in einem Raumschiff zu verlassen. Das Phänomen wird auch als Kessler-Syndrom bezeichnet.",
			"Wusstest du? Die Ausscheidungen des Wombats haben die Form eines Würfels. Bisher konnte nicht geklärt werden, welchen evolutionären Vorteil derart geformte Ausscheidungen haben. Man nimmt aber an, dass die Tiere damit ihr Revier besser markieren können.",
			"Wusstest du? Als Ed Headrick, der Erfinder des Frisbees, 2002 starb, wurde seine Asche in Frisbees eingeschmolzen und an seine Familie und engste Freunde verteilt.",
			"Wusstest du? Die Schuhgröße der Freiheitsstatue ist 3.500",
			"Wusstest du? Grüne Gummibärchen schmecken nach Erdbeere",
			"Wusstest du? Der Ikea-Katalog hat als einziges Buch mehr gedruckte Exemplare als die Bibel",
			"Wusstest du? Das Anker-Motiv als Tattoo hatte ursprünglich die Bedeutung zu signalisieren, dass der Träger bereits den Atlantik überquert hatte.",
			"Wusstest du? Nachdem Uber in New York City eingeführt wurde, sank die Anzahl der alkoholbezogenen Autounfälle schnell um mehr als 30%.",
			"Wusstest du? Australien ist die Heimat von 21 der 25 gefährlichsten Schlangen der Welt.",
			"Wusstest du? Der Uranus ist 63 Mal so groß wie die Erde.",
			"Wusstest du? In der spanischen Synchronisation von „Terminator 2“ sagt der Terminator nicht „Hasta La vista, Baby“ sondern „Sayonara, Baby“.",
			"Wusstest du? Am Freitag, den 18. April 1930, verkündete der Nachrichtensender BBC in seiner täglichen Sendung „There is no news“, da einfach absolut nichts Wichtiges passiert ist. Anstatt einer Nachrichtenshow wurde deshalb 15 Minuten Klaviermusik gespielt.",
			"Wusstest du? Mit einem Durchmesser von bis zu zwei Metern und einer Länge von bis zu 37 Metern ist die Gelbe Haarqualle die größte Qualle der Welt. Sie ist sogar länger als ein Blauwal.",
			"Wusstest du? Airbags entfalten sich vollständig innerhalb von circa 30 Millisekunden.",
			"Wusstest du? Kühe haben keinen Schließmuskel und würden deshalb mit Wasser voll laufen und untergehen, wenn sie schwimmen.",
			"Wusstest du? Eier explodieren in der Mikrowelle.",
			"Wusstest du? Nach Packungsangabe ist der Tagesbedarf an Vitamin B6 bereits nach 1,3 kg Nutella gedeckt.",
			"Wusstest du? Haie gibt es bereits länger auf der Erde als Bäume.",
			"Wusstest du? Pandas können eine Schwangerschaft vortäuschen, um somit mehr Essen von ihren Pflegern zu erhalten.",
			"Wusstest du? Die Explosion einer heutigen Atombombe in London würde eine so große Druckwelle erzeugen, dass sogar Glasscheiben in Berlin zerbrechen würden.",
			"Wusstest du? 2010 wurde eine Pizza für 10.000 Bitcoin verkauft. Bei dem heutigen Wechselkurs entspricht das 3,6 Millionen Euro.",
			"Wusstest du? Auf Island, Grönland und in der Antarktis gibt es keine Ameisen.",
			"Wusstest du? Die Ersteller des Spiels „Satisfactory“ haben zuvor das Spiel „Goat Simulator“ entwickelt.",
			"Wusstest du? Im Indiana Staatsgefängnis dürfen die Insassen Katzen halten.",
			"Wusstest du? Es gibt eine Programmiersprache mit dem Namen ArnoldC, die nur aus Zitaten von Arnold Schwarzenegger besteht.",
			"Wusstest du? Frederic Baur entwickelte die Verpackung der Pringles Chips. Als er 2008 starb, wurde seine Asche in einer Pringles Dose beerdigt.",
			"Wusstest du? Katzen können keinen Zucker schmecken.",
			"Wusstest du? 1970 wurde weltweit nur 6. Mrd. Dollar für Fast Food ausgegeben. Mittlerweile sin es jährlich 200 Mrd. Dollar.",
			"Wusstest du? Als Einstein von dem Buch „100 Autoren gegen Albert Einstein“ erfuhr, antwortete er darauf „Warum 100? Wenn ich falsch liegen würde, wäre einer doch schon genug“.",
			"Wusstest du? Es ist nicht möglich mit offenen Augen zu niesen.",
			"Wusstest du? Nutella hat einen Lichtschutzfaktor von 9,5.",
			"Wusstest du? Im Durchschnitt erreicht ein Regentropfen eine Geschwindigkeit von 35 km/h.",
			"Wusstest du? In Schweden geschehen die wenigsten Morde.",
			"Wusstest du? Gemessen an den verkauften Stückzahlen sind die erfolgreichsten Videospiele aller Zeiten Minecraft, Tetris und GTA 5.",
			"Wusstest du? Der „Schimpansenkrieg von Gombe“ beschreibt einen über vier Jahre andauernden Krieg zwischen zwei verfeindeten Schimpansengruppen in Tansania. In dieser Zeit kam es zu gegenseitigen Tötungen, Gewalt und Entführungen. Der Krieg gilt als die erste bekannte Situation, bei der Schimpansen absichtlich einen anderen Schimpansen töten.",
			"Wusstest du? Aufgrund plattentektonischer Bewegungen wandert Australien jedes Jahr um etwa 7 Zentimeter Richtung Norden.",
			"Wusstest du? Die Blätter der „Skelettblume“ werden transparent, wenn sie mit Regen in Berührung kommen.",
			"Wusstest du? Feuer erzeugt keinen Schatten.",
			"Wusstest du? Eine rote Haarfarbe und blaue Augen ist die seltenste Kombination von Haar- und Augenfarbe. Lediglich 1 Prozent der Weltbevölkerung weist diese Merkmale auf.",
			"Wusstest du? Mr. Bean Darsteller Rowan Atkinson besitzt einen Masterabschluss in Elektrotechnik.",
			"Wusstest du? In Frankreich ist es gesetzlich verboten ein Schwein Napoleon zu nennen.",
			"Wusstest du? Die Lieblingsserie des Neeon entwicklers ist „Willkommen in Gravity Falls“.",
			"Wusstest du? Würde man alles Wasser der Welt in einen Würfel schütten, bräuchte dieser Würfel 1.115 Kubikkilometer Fassungsvermögen.",
			"Wusstest du? Die Höchstgeschwindigkeit eines T.Rex war langsamer als die durchschnittliche Sprintgeschwindigkeit eines Menschen.",
			"Wusstest du? Hält man ein Sandkorn in den Nachthimmel, verdeckt es damit ca. 10.000 Galaxien vor dem menschlichen Auge.",
			"Wusstest du? Zur Weltpremiere der 9. Symphonie von Beethoven war dieser bereits vollkommen taub und konnte sie nicht mehr hören."

		]
		const randomMessage = messages[Math.floor(Math.random() * messages.length)]
		message.channel.send(randomMessage)
	},
};