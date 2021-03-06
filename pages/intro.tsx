import React from "react";
import useColors from "../hooks/use-colors";

export default function Intro() {
    return (
            <div className='container max-w-xl'>
                <div className='mt-2xl mb-lg'>
                    <div className="max-w-prose mx-auto">
                        <h1>Méthodologie</h1>
                        <img className='mt-xs w-full' src="/hr.png" alt="ligne horizontal CEFIR" width={202} height={6} />

                        <h4 className='text-primary-600 mt-lg mb-sm'>Les sources</h4>
                        <p>
                            Les événements organisés ou impliquant des groupes d’extrême droite québécois (ou des groupes
                            étrangers, mais ayant eu lieu au Québec) constituent les unités de base de notre recherche. La
                            première étape consistait donc à recenser l’ensemble des activités publiques et semi-publiques
                            des groupes d’extrême droite québécois s’étant déroulées au cours de la période étudiée, soit de
                            2010 à 2020.
                        </p>
                        <p className='mt-sm'>
                            Les activités dites « publiques » désignent des actions telles que des manifestations, campagnes
                            d’affichage, campagnes électorales ou tout autre type d’événement s’étant déroulé dans l’espace
                            public. La notion d’activité « semi-publique » renvoie à des événements n’étant pas directement
                            accessibles au public, mais ayant néanmoins été publicisés par les groupes. Il s’agit, par exemple,
                            de conférences, de concerts ou de rassemblements accessibles uniquement sur invitation. Les
                            activités « en ligne » n’ont pas été comptabilisées, sauf lorsqu’elles ont conduit à des arrestations
                            et/ou des procès.
                        </p>
                        <p className="mt-sm">
                            Les bases de données comme la Canadian Incident Database5
                            (CIDB) et la Global Terrorism Database6
                            (GTD) ont permis de retracer certains événements. Toutefois, puisque nous cherchions à aller au-delà
                            d’une recension des crimes violents et du terrorisme, les données tirées de ces sources ont dû être
                            complétées et croisées avec celles provenant d’autres sources. À travers la base de données Eureka,
                            nous avons ainsi épluché les journaux nationaux et régionaux pour la décennie 2010, de même que les
                            sites web des deux chaînes de télévision généralistes francophones de la province, soit Radio-Canada
                            et TVA Nouvelles. Nous avons également fouillé manuellement les pages Facebook des groupes
                            d’extrême droite, de même que leur site web et leur chaîne YouTube (lorsque disponibles). Enfin, les
                            sites web, blogues et pages Facebook d’organisations antifascistes qui s’adonnent à la surveillance
                            EXTRÊME DROITE AU QUÉBEC. UNE CHRONOLOGIE DES ÉVÉNEMENTS ET DE LA VIOLENCE (2010-2020) 13
                            des activités de l’extrême droite (comme Anti-Racist Canada7
                            , FachoWatch8
                            , Montréal Antifasciste9
                            et le blogue de Xavier Camus10) ont été inventoriés et se sont révélés être des sources d’informations
                            complémentaires pertinentes, notamment pour retracer les événements survenus au début de la
                            décennie, alors que peu de médias s’intéressaient au phénomène. Nous avons néanmoins cherché
                            à limiter notre recours à des données provenant de pages militantes s’opposant à l’extrême droite.
                            Nous y avons eu recours uniquement lorsque cela était inévitable et nous avons tenté le plus possible
                            de croiser ces sources avec d’autres sources médiatiques ou des informations de première main
                            émanant directement des groupes concernés.
                        </p>
                        <p className="mt-sm">
                            La liste complète des événements répertoriés sera rendue disponible publiquement au courant de
                            l’été 2021 sur le site web du CEFIR11, où nous poursuivrons notre veille permanente des activités de
                            l’extrême droite. Cette liste sera mise à jour de manière ponctuelle.
                        </p>

                        <h4 className='text-primary-600 mt-lg mb-sm'>Les groupes</h4>
                        <p>
                            Les 45 groupes dont nous avons recensé les activités (voir figure 2 - p.18) ont été sélectionnés à
                            partir de la liste des groupes d’extrême droite actifs au Québec établie par Nadeau (2020, 126), en y
                            ajoutant les groupes désormais inactifs, certains autres découverts au fil de la recherhe, de même
                            que les groupes anti-mesures sanitaires (GAMS) créés dans la foulée de la pandémie de Covid19. Geoffroy et Boily (2021) identifient divers courants actifs au sein du mouvement anti-mesures
                            sanitaires (AMS) : la tendance « nouvel âge» qui se caractérise par un discours plus ou moins
                            ésotérique axé sur la remise en question de la science moderne ; le courant « citoyens souverains »,
                            qui se caractérise par un discours politico-juridique centré sur la remise en question de l’autorité
                            gouvernementale et des tribunaux ; le courant « identitaire », qui développe un discours populiste
                            articulé autour de la promotion du nationalisme et d’une certaine idée de l’identité et du peuple
                            québécois ; et enfin les courants « religieux » (surtout protestants et catholiques), qui mettent de
                            l’avant une vision ultra-conservatrice de la société et rejettent l’autorité de l’État, considérant que la
                            loi de Dieu est supérieure à celle de l’Homme. À l’heure actuelle, plusieurs chevauchements existent
                            entre ces différents courants et, dans la mesure où les frontières idéologiques et organisationnelles
                            ne sont pas tout à fait claires au sein de cette alliance récente, le présent rapport n’opère pas de
                            distinction entre les groupes qui constituent le mouvement AMS : leurs activités ont été identifiées
                            sous la même appellation générique de « groupes anti-mesures sanitaires » (GAMS).
                        </p>
                        <p className="mt-sm">
                            Les groupes de la mouvance AMS peuvent être rattachés à l’extrême droite dans la mesure où ils
                            partagent une matrice idéologique commune. Cette matrice idéologique est fondée en premier
                            lieu sur une conception inégalitaire des rapports sociaux. Cela s’observe notamment lorsque les
                            GAMS insistent sur le fait que la Covid-19 ne serait dangereuse que pour un faible pourcentage de
                            la population et que, conséquemment, les personnes en santé (les forts) ne devraient pas avoir à
                            subir de restrictions à leurs libertés individuelles si c’est pour protéger les personnes vulnérables
                            EXTRÊME DROITE AU QUÉBEC. UNE CHRONOLOGIE DES ÉVÉNEMENTS ET DE LA VIOLENCE (2010-2020) 14
                            (les faibles). En second lieu, cette matrice idéologique s’enracine dans un rejet des valeurs et des
                            institutions de la démocratie libérale (science, État, tribunaux, médias, universités, etc.). On peut
                            percevoir l’enracinement des GAMS dans l’extrême droite notamment à travers la façon dont ils se
                            sont approprié la notion d’« État profond » [Deep State], issue directement des extrêmes droites
                            fascistes et suprémacistes « classiques » et rendue particulièrement visible aujourd’hui à travers le
                            phénomène QAnon. Selon cette tendance idéologique, la démocratie libérale ne serait qu’une illusion
                            entretenue par une élite mondialiste cherchant à détourner l’attention des populations pendant
                            qu’elle prendrait clandestinement le contrôle de la planète à travers des procédés malhonnêtes.
                            Cette élite serait parvenue à imposer ses intérêts et sa vision du monde en corrompant ou en
                            soumettant les dirigeants nationaux et en prenant le contrôle des principales institutions où se
                            forgent les représentations collectives (culture populaire, médias, universités, ONU, OMS, etc.). De
                            cette hégémonie résulterait un peuple endoctriné ; un peuple de moutons et d’endormis au sein
                            duquel les militants se perçoivent eux-mêmes comme une avant-garde éclairée étant parvenu à
                            briser l’illusion et à voir clair dans le jeu des dirigeants. Plusieurs des leaders du mouvement AMS
                            sont d’ailleurs d’anciens leaders de la droite identitaire et de l’extrême droite québécoises.
                        </p>
                        <p className="mt-sm">
                            Au total, nous avons répertorié les activités de 45 groupes d’extrême droite québécois (incluant les
                            « GAMS ») auxquels s’ajoute la catégorie « aucun/inconnu », pour la période allant du 1er janvier 2010
                            au 31 décembre 2020.
                        </p>
                        <h4 className='text-primary-600 mt-lg mb-sm'>Les types d’événements</h4>
                        <p className="mt-sm">
                            Comme mentionné, nous nous sommes uniquement intéressés aux activités publiques et semipubliques de l’extrême droite (à l’exception des cybercrimes ayant conduit à des accusations
                            criminelles). Ces activités ont été catégorisées selon cinq types d’événements :
                        </p>
                    </div>
                </div>
            </div>
    );
}